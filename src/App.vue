<template>
  <div class="app-wrapper">
    <nav-bar />
    <main :style="mainStyle">
      <router-view />
    </main>
    <footer>
      <p>
        感谢邱郁文同学在百忙之中抽出时间为我制作的设计稿~
      </p>
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
    const mainStyle = computed<string>(
      () => `min-height: ${clientSize.height - 188}px`
    );

    return {
      mainStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.app-wrapper {
  overflow: hidden;

  background: #fefefe;

  > main {
    width: 100%;
    padding-bottom: 40px;

    position: relative;
  }

  > footer {
    height: 100px;
    width: 100%;
    padding-top: 16px;

    > p {
      text-align: center;
      color: rgba(0, 0, 0, 0.32);
      font-size: 14px;
    }
  }
}
</style>
