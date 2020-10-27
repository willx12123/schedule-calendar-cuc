<template>
  <div
    class="drag-in-wrapper"
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @drop.prevent.stop="onFileDrop"
  >
    {{ '拖拽课表 Excel 文件到此处' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    return {
      onFileDrop,
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
  justify-content: center;
  align-items: center;
}
</style>
