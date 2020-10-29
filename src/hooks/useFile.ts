import { ref } from 'vue';
import * as XLSX from 'xlsx';

import { store } from '@/store';

import { Class } from '@/interfaces/class';
import { toDate } from '@/lib/toDate';

import { useXlsx } from '@/hooks/useXlsx';

const { handleSheet } = useXlsx();

const addToCalendar = (classes: Class[]) => {
  classes.forEach((item) => {
    const {
      id,
      name,
      classroom,
      teacher,
      startWeek,
      endWeek,
      start,
      end,
      day,
    } = item;
    store.cal.addEvent(
      `${id} ${name}`,
      teacher,
      classroom,
      toDate(startWeek, day, start).toString(),
      toDate(startWeek, day, end, true).toString(),
      {
        freq: 'WEEKLY',
        until: toDate(endWeek + 1, day),
      }
    );
  });
};

export const useFile = () => {
  const reader = ref<FileReader>(new FileReader());

  const handleFile = (file: File) => {
    reader.value.readAsArrayBuffer(file);

    reader.value.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      let classes: Class[];
      try {
        classes = handleSheet(workbook.Sheets);
      } catch (e) {
        throw new Error('处理 sheet 失败');
      }

      addToCalendar(classes);
    };
  };

  return {
    reader,
    handleFile,
  };
};
