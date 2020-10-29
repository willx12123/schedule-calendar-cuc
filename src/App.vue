<template>
  <div class="app-wrapper" :style="appStyle">
    <nav-bar />
    <main>
      <router-view />
    </main>
    <footer>
      感谢邱郁文同学在百忙之中抽出时间为我制作的设计稿~
    </footer>
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fefefe;

  > main {
    width: 100%;
    flex-grow: 1;
    padding-bottom: 40px;
    overflow: auto;
  }

  > footer {
    height: 100px;
    width: 100%;
    padding-top: 16px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    color: rgba(0, 0, 0, 0.32);
  }
}
</style>
