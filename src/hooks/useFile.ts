import { ref } from 'vue';
import * as XLSX from 'xlsx';

import { message } from 'ant-design-vue';

import { store } from '@/store';

import { Class } from '@/interfaces/class';
import { Event } from '@/interfaces/event';
import { toDate } from '@/lib/toDate';

import { useXlsx } from '@/hooks/useXlsx';

const { handleSheet } = useXlsx();

const handleEvent = (event: Event) => {
  const { description, location, begin, stop, subject, RRULE } = event;
  if (!RRULE) {
    store.cal.addEvent(subject, description, location, begin, stop);
  } else {
    store.cal.addEvent(subject, description, location, begin, stop, RRULE);
  }
};

const addToCalendar = (classes: Class[]) => {
  if (store.state.isDropped) {
    store.resetCal();
  }
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
    const startTime = toDate(startWeek, day, start);
    const endTime = toDate(startWeek, day, end, true);
    if (!startTime || !endTime) {
      return;
    }
    const event: Event = {
      subject: `${name} ${teacher}`,
      description: `课程号：${id}`,
      location: classroom,
      begin: startTime,
      stop: endTime,
    };
    if (endWeek) {
      event.RRULE = {
        freq: 'WEEKLY',
        until: toDate(endWeek + 1, day),
      };
    }
    handleEvent(event);
  });
};

export const useFile = () => {
  const reader = ref<FileReader>(new FileReader());

  const handleFile = (file: File) => {
    reader.value.readAsArrayBuffer(file);

    reader.value.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);

      let workbook;
      try {
        workbook = XLSX.read(data, { type: 'array' });
      } catch (e) {
        message.error('处理文件失败，请确认文件类型。');
        throw new Error('处理文件失败');
      }

      let classes: Class[];
      try {
        classes = handleSheet(workbook.Sheets);
      } catch (e) {
        message.error('处理 sheet 失败，请确认表格无误');
        throw new Error('处理 sheet 失败');
      }

      addToCalendar(classes);
      store.fileDropped();
      message.success('处理文件成功，请点击按钮下载');
    };
  };

  return {
    reader,
    handleFile,
  };
};
