<template>
  <div class="app-wrapper">
    <nav-bar />
    <main :style="mainStyle">
      <router-view />
    </main>
    <footer>
      <h1>请不要使用微信直接点开该网页！！！</h1>
      <h1>请复制至 Chrome（推荐）、FireFox、Safari 访问！！！</h1>
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

    display: flex;
    flex-direction: column;

    text-align: center;

    > h1 {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>
