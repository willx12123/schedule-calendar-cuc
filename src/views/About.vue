<template>
  <div class="about">
    <div class="about-words">
      <h1>About page works!</h1>
      <p>
        本网页是实验作品，目前仅可用于“列表模式”下下载的课表（尚不支持直接「打印」的课表，即列表模式左边的打印按钮）。
      </p>
      <p>
        若存在任何建议或 Bug 反馈，请联系：
        <strong>hangyu_xu@foxmail.com</strong>
      </p>
      <p>
        感谢邱郁文同学在百忙之中抽出时间为我制作的设计稿~
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
