import { reactive } from 'vue';

import { ClientSize } from '@/hooks/ClientSize';

import { useDebounce } from '@/hooks/useDebounce';

export const useWindow = () => {
  const getClientSize = (): ClientSize => {
    return {
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
    };
  };

  const clientSize = reactive<ClientSize>(getClientSize());

  const resizeClient = () => {
    const { width, height } = getClientSize();
    clientSize.width = width;
    clientSize.height = height;
  };

  window.addEventListener('resize', useDebounce(resizeClient, 150));

  return {
    clientSize,
  };
};
