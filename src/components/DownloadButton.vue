<template>
  <button @click="handleDownload">下载</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { cal } from '@/store';

const handleDownload = () => {
  cal.download('课程表');
};

export default defineComponent({
  name: 'DownloadButton',
  setup() {
    return {
      handleDownload,
    };
  },
});
</script>

<style scoped lang="scss">
button {
  padding: 8px 98px;
  border: none;
  border-radius: 50px;
  background: #69c5ff;

  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  color: #ffffff;

  cursor: pointer;
  transition: 125ms;

  &:hover {
    box-shadow: 0 10px 30px 1px rgba(105, 197, 255, 0.54);
  }
}
</style>
