<template>
  <div class="app-wrapper">
    <nav-bar />
    <main :style="mainStyle">
      <router-view />
    </main>
    <footer>
      <p>
        GitHub 仓库地址：<a
          href="https://github.com/AerospaceXu/schedule-calendar-cuc"
          >https://github.com/AerospaceXu/schedule-calendar-cuc</a
        >
      </p>
      <p>请不要使用微信直接点开该网页！！！</p>
      <p>请复制至 Chrome（推荐）、FireFox、Safari 访问！！！</p>
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

    > p {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.32);
    }
  }
}
</style>
