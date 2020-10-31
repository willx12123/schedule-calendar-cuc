<template>
  <div
    class="drag-in-wrapper"
    :class="isMouseDragOver ? 'drag-over' : ''"
    @dragover.prevent.stop
    @dragenter.prevent.stop="onDragEnter"
    @dragleave.prevent.stop="onDragLeave"
    @drop.prevent.stop="onFileDrop"
  >
    <span @dragenter.prevent.stop @dragleave.prevent.stop>{{ attention }}</span>
    <button v-if="buttonVisible" @click="emitInputFile">
      点击选择文件
    </button>
    <img :class="img.className" :src="img.src" alt="" />
    <input
      type="file"
      @change="selectFile"
      ref="fileInput"
      style="display: none"
      multiple
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import icsInFile from '@/assets/ics-in-file.svg';
import dropHere from '@/assets/drop-here.svg';

import { store } from '@/store';

import { useFile } from '@/hooks/useFile';

import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'FileDropBox',
  setup() {
    const fileInput = ref<HTMLInputElement | null>(null);

    const isPhone = document.body.clientWidth <= 450;
    const buttonVisible = computed(() => isPhone && !store.state.isDropped);
    const isMouseDragOver = ref<boolean>(false);

    const { handleFile } = useFile();

    const onFileDrop = (e: DragEvent) => {
      isMouseDragOver.value = false;

      const files = e.dataTransfer?.files;
      if (!files) {
        message.error('找不到文件');
        return;
      }
      handleFile(files[0]);
    };
    const selectFile = (e: InputEvent) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) {
        message.error('找不到文件');
        return;
      }
      handleFile(files[0]);
    };
    const emitInputFile = () => {
      fileInput.value?.click();
    };

    const onDragLeave = () => {
      isMouseDragOver.value = false;
    };
    const onDragEnter = () => {
      isMouseDragOver.value = true;
    };

    const img = computed(() => ({
      src: store.state.isDropped ? icsInFile : dropHere,
      className: store.state.isDropped ? 'calendar-in-file' : 'drop-excel-here',
    }));

    const attention = computed<string>(() =>
      store.state.isDropped
        ? '课表日历文件已生成，可下载后导入任意日历软件中哦～'
        : isPhone
        ? '请选择课表 Excel 文件'
        : '拖拽课表 Excel 文件到此处'
    );

    return {
      isPhone,
      onFileDrop,
      onDragLeave,
      onDragEnter,
      isMouseDragOver,
      emitInputFile,
      selectFile,
      attention,
      img,
      fileInput,
      buttonVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-in-wrapper {
  width: 600px;
  height: 300px;
  border-radius: 20px;
  background: rgba(216, 216, 216, 0.24);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  user-select: none;

  transition: 225ms;

  &.drag-over {
    background: rgba(216, 216, 216, 0.54);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
      0 3px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    width: calc(100% - 40px);
    height: 200px;
    min-width: 0;
  }

  > span {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    pointer-events: none;

    @media (max-width: 450px) {
      color: rgba(0, 0, 0, 0.4);
      padding: 0 40px;
      font-size: 14px;
    }
  }

  > button {
    margin: 8px;
    color: rgba(0, 0, 0, 0.72);
    padding: 4px 12px;
    border: 0.5px solid rgba(0, 0, 0, 0.34);
    border-radius: 4px;
    background: transparent;
  }

  > img {
    object-fit: cover;

    &.drop-excel-here {
      pointer-events: none;
      @media (max-width: 450px) {
        width: 100px;
        right: 40px;
        top: -50px;
      }
      width: 150px;
      position: absolute;
      right: 50px;
      top: -80px;
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
