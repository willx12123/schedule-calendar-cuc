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

export default defineComponent({
  name: 'DropBox',
  setup() {
    const handleFileDrop = () => {
      console.log('拖入了');
    };
    return {
      handleFileDrop,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-in-wrapper {
  border: 1px solid black;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
