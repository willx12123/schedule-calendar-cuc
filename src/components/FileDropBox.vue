<template>
  <div
    class="drag-in-wrapper"
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @drop.prevent.stop="onFileDrop"
  >
    <span>{{ attention }}</span>
    <img
      class="drop-excel-here"
      v-if="!store.state.isDropped"
      :src="dropHere"
      alt=""
    />
    <img
      class="calendar-in-file"
      v-if="store.state.isDropped"
      :src="icsInFile"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import icsInFile from '@/assets/ics-in-file.svg';
import dropHere from '@/assets/drop-here.svg';

import { store } from '@/store';

import { useFile } from '@/hooks/useFile';

export default defineComponent({
  name: 'DropBox',
  setup() {
    const { handleFileDrop } = useFile();
    const onFileDrop = (e: DragEvent) => {
      try {
        handleFileDrop(e);
        store.fileDropped();
      } catch (e) {
        console.log(e);
      }
    };

    const attention = computed<string>(() =>
      store.state.isDropped
        ? '课表日历文件已生成，可下载后导入任意日历软件中哦～'
        : '拖拽课表 Excel 文件到此处'
    );

    return {
      onFileDrop,
      attention,
      icsInFile,
      dropHere,
      store,
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
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);

  position: relative;

  user-select: none;

  > img {
    object-fit: cover;

    &.drop-excel-here {
      position: absolute;
      right: 80px;
      top: -112px;
    }

    &.calendar-in-file {
      width: 124px;
      margin: 16px;
    }
  }
}
</style>
