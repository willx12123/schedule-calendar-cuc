<template>
  <div class="options-wrapper">
    <span>
      一头雾水？或许可以查看
      <a-button class="override-button-help" type="link" @click="jumpToHelp">
        帮助
      </a-button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import router from '@/router';

export default defineComponent({
  name: 'Options',
  setup() {
    const jumpToHelp = () => {
      router.push('help');
    };

    return {
      jumpToHelp,
    };
  },
});
</script>

<style scoped lang="scss">
.options-wrapper {
  min-width: 640px;
  width: 33%;
  max-width: 800px;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.4);

    > .override-button-help {
      padding: 0 4px;
    }
  }
}
</style>
