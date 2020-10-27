<template>
  <nav>
    <router-link to="/">日历</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/help">帮助</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  padding: 32px 0 8px;
  display: flex;
  justify-content: center;

  > a {
    width: 118px;
    padding: 12px;
    border-radius: 8px;

    font-size: 16px;
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
    font-weight: 600;

    transition: 225ms;

    &:hover {
      color: #3866d0;
      background: rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
