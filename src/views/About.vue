<template>
  <div class="about">
    <h1>About page works!</h1>
    <p>目前尚处于实验阶段，仅可用于 2020-2021 秋季学期课表</p>
    <p>仅可用于“列表模式”下下载的课表，尚不支持直接打印的课表</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
