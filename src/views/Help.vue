<template>
  <div class="help">
    <h1>Help page works!</h1>
    <p><strong>第一步：</strong>打开 e.cuc.edu.cn，并点击“我的课表”。</p>
    <p><strong>第二步：</strong>点击左上角的“列表模式”（“打印”按钮的右边）。</p>
    <img :src="listMode" alt="" />
    <img :src="listModeBig" alt="" />
    <p>
      <strong>第三步：</strong
      >点击左上角的“导出”，待进度条结束后点击“立即下载”。
    </p>
    <img :src="output" alt="" />
    <p>
      <strong>第四步：</strong>将下载好的 excel 文件拖入本网站的文件处理区域。
    </p>
    <p>
      <strong>第五步：</strong>待提示成功后，点击下载即可获得日历 ics 文件。
    </p>
    <p>
      <strong>第六步：</strong>Mac 电脑直接双击打开即可导入日历，Windows
      电脑若有自带的日历软件也可直接打开，几乎所有日历软件都支持改格式的文件，寻找到导入按钮即可，
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import listMode from '@/assets/tutorial/list-mode.png';
import listModeBig from '@/assets/tutorial/big-list-mode.png';
import output from '@/assets/tutorial/output.png';

export default defineComponent({
  name: 'Help',
  setup() {
    return {
      listMode,
      listModeBig,
      output,
    };
  },
});
</script>

<style scoped lang="scss">
.help {
  width: 100%;
  max-width: 678px;
  min-width: 450px;
  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 32px;
  }

  > p {
    margin: 4px;
  }

  img {
    width: 80%;
    margin: 8px auto;
    object-fit: cover;
  }
}
</style>
