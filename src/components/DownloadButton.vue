<template>
  <a-button
    type="primary"
    ref="button"
    class="override-button"
    :class="buttonClass"
    :style="buttonStyle"
    @click="handleDownload"
    :disabled="isDisabled"
  >
    下载日历文件
  </a-button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  watchEffect,
  computed,
} from 'vue';

import { store } from '@/store';

const handleDownload = () => {
  store.cal.download('课程表');
};

export default defineComponent({
  name: 'DownloadButton',
  setup() {
    const button = ref<HTMLButtonElement | null>(null);
    const buttonStyle = reactive<{
      borderRadius: string;
      background: string;
    }>({
      borderRadius: '',
      background: '',
    });

    watchEffect(() => {
      const { isDropped } = store.state;
      buttonStyle.background = isDropped ? '#69c5ff' : '#E4E4E4';
    });

    const buttonClass = computed<string>(() =>
      !store.state.isDropped ? 'disable' : ''
    );
    const isDisabled = computed<boolean>(() => !store.state.isDropped);

    onMounted(() => {
      const buttonHeight = button.value?.clientHeight;
      if (buttonHeight) {
        buttonStyle.borderRadius = `${buttonHeight / 2}px`;
      }
    });

    return {
      button,
      buttonStyle,
      buttonClass,
      isDisabled,
      handleDownload,
    };
  },
});
</script>

<style scoped lang="scss">
$background-color: #69c5ff;
.override-button {
  height: auto;
  padding: 8px 98px;
  border: none;
  border-radius: 50px;
  outline: none;
  background: $background-color;

  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  color: #ffffff;

  cursor: pointer;
  user-select: none;
  transition: 100ms;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
      0 3px 5px rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }

  &:active {
    background: darken($background-color, 20%);
  }

  &.disable {
    cursor: not-allowed;

    &:hover {
      box-shadow: none;
    }
  }
}
</style>
