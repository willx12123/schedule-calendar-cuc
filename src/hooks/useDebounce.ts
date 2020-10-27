export const useDebounce = (fn: Function, wait: number) => {
  let timer: number | null = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  };
};
