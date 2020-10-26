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
  padding: 2px 8px;
}
</style>
