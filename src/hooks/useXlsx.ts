import * as XLSX from 'xlsx';

import { Class } from '@/interfaces/class';

const weekDayArr = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日',
];

const toClasses = (sheet: XLSX.WorkSheet) => {
  const cells = Object.keys(sheet);
  const classIds = cells.filter((cell) => cell.startsWith('A')).slice(1);
  const classNames = cells.filter((cell) => cell.startsWith('B')).slice(1);
  const classWeeks = cells.filter((cell) => cell.startsWith('F')).slice(1);
  const classDays = cells.filter((cell) => cell.startsWith('G')).slice(1);
  const classStarts = cells.filter((cell) => cell.startsWith('H')).slice(1);
  const classEnds = cells.filter((cell) => cell.startsWith('I')).slice(1);
  const classTeachers = cells.filter((cell) => cell.startsWith('J')).slice(1);
  const classClassrooms = cells.filter((cell) => cell.startsWith('K')).slice(1);

  const classesCount = classIds.length;
  const classes: Class[] = [];
  for (let i = 0; i < classesCount; i++) {
    const weekday = sheet[classWeeks[i]].v;
    const [startWeek, endWeek] = weekday
      .slice(0, weekday.length - 1)
      .split('-')
      .map((item: string) => Number.parseInt(item));
    classes.push({
      id: Number.parseInt(sheet[classIds[i]].v),
      name: sheet[classNames[i]].v,
      teacher: sheet[classTeachers[i]].v,
      classroom: sheet[classClassrooms[i]].v,
      start: Number.parseInt(sheet[classStarts[i]].v),
      end: Number.parseInt(sheet[classEnds[i]].v),
      startWeek,
      endWeek,
      day: weekDayArr.indexOf(sheet[classDays[i]].v) + 1,
    });
  }
  return classes;
};

export const useXlsx = () => {
  const handleSheet = (sheets: { [p: string]: XLSX.WorkSheet }) => {
    const firstSheet = sheets[Object.keys(sheets)[0]];
    return toClasses(firstSheet);
  };

  return {
    handleSheet,
  };
};
