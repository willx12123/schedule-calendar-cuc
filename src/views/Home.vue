<template>
  <div class="home-wrapper">
    <span v-if="!store.state.isDropped">
      一头雾水？或许可以查看
      <a-button type="link" @click="jumpToHelp">帮助</a-button>
    </span>
    <file-drop-box />
    <download-button class="download-button" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import router from '@/router';
import { store } from '@/store';

import FileDropBox from '@/components/FileDropBox.vue';
import DownloadButton from '@/components/DownloadButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    FileDropBox,
    DownloadButton,
  },
  setup() {
    const jumpToHelp = () => {
      router.push('help');
    };

    return {
      jumpToHelp,
      store,
    };
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

  > span {
    color: rgba(0, 0, 0, 0.54);
  }

  > .download-button {
    margin: 40px 0;
  }
}
</style>
