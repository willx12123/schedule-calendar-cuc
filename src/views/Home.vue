<template>
  <div class="home-wrapper">
    <drop-box />
    <download-button class="download-button" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DropBox from '@/components/FileDropBox.vue';
import DownloadButton from '@/components/DownloadButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DropBox,
    DownloadButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .download-button {
    margin: 40px 0;
  }
}
</style>
