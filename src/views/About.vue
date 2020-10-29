<template>
  <div class="about">
    <div class="about-words">
      <h1>About page works!</h1>
      <p>
        目前尚处于实验阶段，仅可用于 2020-2021
        秋季学期课表；仅可用于“列表模式”下下载的课表（尚不支持直接打印的课表）。
      </p>
      <p>
        若存在任何建议或 Bug 反馈，请联系：
        <strong>hangyu_xu@foxmail.com</strong>
      </p>
    </div>
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

<style scoped lang="scss">
.about {
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-words {
    width: 100%;
    max-width: 678px;
    margin-top: 32px;

    > h1 {
      margin-bottom: 12px;
    }

    > p {
      margin: 4px 0;
    }
  }
}
</style>
