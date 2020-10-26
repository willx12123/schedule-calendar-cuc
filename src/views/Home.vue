<template>
  <div class="home-wrapper">
    <drag-in-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DragInBox from '@/components/DragInBox.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DragInBox,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
