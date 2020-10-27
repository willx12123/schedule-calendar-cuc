<template>
  <div class="app-wrapper" :style="appStyle">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/help">Help</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useWindow } from '@/hooks/useWindow';

export default defineComponent({
  name: 'App',
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

  > nav {
    width: 100%;
    padding: 8px 0;
    display: flex;
    justify-content: center;
  }

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
