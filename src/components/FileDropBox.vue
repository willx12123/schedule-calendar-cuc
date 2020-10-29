<template>
  <div
    class="drag-in-wrapper"
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @drop.prevent.stop="onFileDrop"
  >
    <span v-if="!isPhone">{{ attention }}</span>
    <button v-else @click="emitInputFile">点击选择文件</button>
    <img :class="img.className" :src="img.src" alt="" />
    <input type="file" @change="selectFile" ref="fileInput" multiple />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue';

import icsInFile from '@/assets/ics-in-file.svg';
import dropHere from '@/assets/drop-here.svg';

import { store } from '@/store';

import { useFile } from '@/hooks/useFile';

export default defineComponent({
  name: 'FileDropBox',
  setup: function() {
    const fileInput = ref<HTMLInputElement | null>(null);
    onMounted(() => fileInput.value);

    const isPhone = document.body.clientWidth <= 450;

    const { handleFile } = useFile();
    const onFileDrop = (e: DragEvent) => {
      const files = e.dataTransfer?.files;
      if (!files) {
        console.error('无法找到文件');
        return;
      }
      handleFile(files[0]);
      store.fileDropped();
    };
    const selectFile = (e: InputEvent) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) {
        console.error('无法找到文件');
        return;
      }
      handleFile(files[0]);
      store.fileDropped();
    };
    const emitInputFile = () => {
      fileInput.value?.click();
    };

    const img = reactive({
      src: store.state.isDropped ? icsInFile : dropHere,
      className: store.state.isDropped ? 'calendar-in-file' : 'drop-excel-here',
    });

    const attention = computed<string>(() =>
      store.state.isDropped
        ? '课表日历文件已生成，可下载后导入任意日历软件中哦～'
        : '拖拽课表 Excel 文件到此处'
    );

    return {
      isPhone,
      onFileDrop,
      emitInputFile,
      selectFile,
      attention,
      img,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-in-wrapper {
  min-width: 640px;
  width: 33%;
  max-width: 800px;
  height: 346px;
  border-radius: 20px;
  background: rgba(216, 216, 216, 0.16);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: rgba(0, 0, 0, 0.32);

  position: relative;

  user-select: none;

  @media (max-width: 450px) {
    width: calc(100% - 40px);
    min-width: 0;
  }

  > input {
    background: transparent;
  }

  > img {
    object-fit: cover;

    &.drop-excel-here {
      @media (max-width: 450px) {
        width: 120px;
        right: 50px;
        top: -50px;
      }
      position: absolute;
      right: 80px;
      top: -112px;
    }

    &.calendar-in-file {
      width: 124px;
      margin: 16px;
      @media (max-width: 450px) {
        width: 80px;
      }
    }
  }
}
</style>
