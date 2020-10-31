import { message } from 'ant-design-vue';

const termHash: {
  [key: string]: string;
} = {
  '2021_SPRING': '2021-03-01T00:00:00',
  '2020_AUTUMN': '2020-09-07T00:00:00',
};

// 每节课的小时数
const classOrder = [
  8,
  9,
  10.17,
  11,
  13.5,
  14.33,
  15.5,
  16.33,
  18,
  18.83,
  20,
  20.83,
  21,
];
const orderTimeArr = classOrder.map((time) => Math.floor(time * 3600000));

export const toDate = (
  weekNumber: number,
  weekday: number,
  order?: number,
  isEnd?: boolean
) => {
  const term = window.localStorage.getItem('term') as string | null;
  if (!term) {
    message.error('学期获取错误，请清理缓存后重试');
    return;
  }
  // 第一周开始日期
  const basic = new Date(termHash[term]);

  const onlyDate = new Date(
    +basic + (weekNumber - 1) * 604800000 + (weekday - 1) * 86400000
  );
  if (!order) {
    return onlyDate;
  } else {
    return new Date(
      +onlyDate + orderTimeArr[order - 1] + (isEnd ? 3600000 : 0)
    );
  }
};
