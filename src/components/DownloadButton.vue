<template>
  <button
    ref="button"
    :class="{ disable: !store.state.isDropped }"
    :style="buttonStyle"
    @click="handleDownload"
    :disabled="!store.state.isDropped"
  >
    下载日历文件
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watchEffect } from 'vue';

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
      if (store.state.isDropped) {
        buttonStyle.background = '#69c5ff';
      } else {
        buttonStyle.background = '#E4E4E4';
      }
    });

    onMounted(() => {
      const buttonHeight = button.value?.clientHeight;
      if (buttonHeight) {
        buttonStyle.borderRadius = `${buttonHeight / 2}px`;
      }
    });

    return {
      button,
      buttonStyle,
      store,
      handleDownload,
    };
  },
});
</script>

<style scoped lang="scss">
$background-color: #69c5ff;
button {
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
  transition: 100ms;

  &:hover {
    box-shadow: 0 10px 30px 1px rgba(105, 197, 255, 0.54);
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
