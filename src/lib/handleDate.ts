const basic = new Date('2020-09-07T00:00:00');
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

export const handleDate = (
  weekNumber: number,
  weekday: number,
  order?: number,
  isEnd?: boolean
) => {
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
