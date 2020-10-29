<template>
  <div class="home-wrapper">
    <alert
      v-if="isAlert"
      alert-message="处理成功，请点击下载日历文件"
      :on-confirm="handleConfirm"
    />
    <file-drop-box :on-dropped="handleAlert" />
    <download-button class="download-button" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import FileDropBox from '@/components/FileDropBox.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import Alert from '@/components/Modals/Alert.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Alert,
    FileDropBox,
    DownloadButton,
  },
  setup() {
    const isAlert = ref<boolean>(true);
    const handleConfirm = () => {
      isAlert.value = false;
    };
    const handleAlert = () => {
      isAlert.value = true;
    };
    return {
      isAlert,
      handleConfirm,
      handleAlert,
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

  > .download-button {
    margin: 40px 0;
  }
}
</style>
