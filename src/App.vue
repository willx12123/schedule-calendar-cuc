<template>
  <div class="app-wrapper" :style="appStyle">
    <nav-bar />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useWindow } from '@/hooks/useWindow';

import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const { clientSize } = useWindow();
    const appStyle = computed(() => {
      const { width, height } = clientSize;
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    });
    return {
      appStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5f5f5;

  > main {
    padding-bottom: 40px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > footer {
    height: 160px;
    width: 100%;
  }
}
</style>
