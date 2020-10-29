<template>
  <div class="home-wrapper">
    <file-drop-box />
    <download-button class="download-button" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FileDropBox from '@/components/FileDropBox.vue';
import DownloadButton from '@/components/DownloadButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    FileDropBox,
    DownloadButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .download-button {
    margin: 40px 0;
  }
}
</style>
