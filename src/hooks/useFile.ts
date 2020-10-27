import { ref } from 'vue';
import * as XLSX from 'xlsx';

import { cal } from '@/store';

import { Class } from '@/interfaces/class';

import { handleSheet } from '@/lib/handleSheet';
import { handleDate } from '@/lib/handleDate';

export const useFile = () => {
  const reader = ref<FileReader>(new FileReader());

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
      cal.addEvent(
        `${id} ${name}`,
        teacher,
        classroom,
        handleDate(startWeek, day, start).toString(),
        handleDate(startWeek, day, end, true).toString(),
        {
          freq: 'WEEKLY',
          until: handleDate(endWeek + 1, day),
        }
      );
    });
  };

  const handleFileDrop = (e: DragEvent) => {
    const files = e.dataTransfer?.files;
    if (!files) {
      throw new Error('无法找到文件');
    }
    reader.value.readAsArrayBuffer(files[0]);

    reader.value.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      let classes: Class[];
      try {
        classes = handleSheet(workbook.Sheets);
      } catch (e) {
        console.log(e);
        throw new Error('处理 sheet 失败');
      }

      alert('处理成功，请点击下载日历文件');
      addToCalendar(classes);
    };
  };

  return {
    reader,
    handleFileDrop,
  };
};
