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
$hover-color: rgba(70, 124, 231, 0.87);

nav {
  width: 100%;
  height: 88px;
  padding: 32px 0 8px;
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    padding: 8px;
  }

  > a {
    width: 118px;
    height: 100%;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
    font-weight: 500;

    transition: 225ms;

    @media (max-width: 540px) {
      padding: 8px;
    }

    &:hover {
      color: $hover-color;
      background: rgba(0, 0, 0, 0.12);

      @media (max-width: 540px) {
        background: transparent;
      }
    }

    &.router-link-active {
      color: $hover-color;
    }
  }
}
</style>
