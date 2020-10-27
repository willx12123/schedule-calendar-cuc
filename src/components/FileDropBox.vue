<template>
  <div
    class="drag-in-wrapper"
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @drop.prevent.stop="handleFileDrop"
  >
    拖拽到此处
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFile } from '@/hooks/useFile';

export default defineComponent({
  name: 'DropBox',
  setup() {
    const { handleFileDrop } = useFile();
    return {
      handleFileDrop,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-in-wrapper {
  width: 640px;
  height: 346px;
  background: #d8d8d8;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
