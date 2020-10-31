<template>
  <div class="options-wrapper">
    <span>选择学期</span>
    <a-select
      class="override-select"
      v-model:value="term"
      style="width: 200px"
      @change="term = $event"
    >
      <a-select-option value="2021_SPRING">
        2021年上半年学期
      </a-select-option>
      <a-select-option value="2020_AUTUMN">
        2020年下半年学期
      </a-select-option>
    </a-select>
    <span class="help-guidance">
      一头雾水？或许可以查看
      <a-button class="override-button-help" type="link" @click="jumpToHelp">
        帮助
      </a-button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

import router from '@/router';

export default defineComponent({
  name: 'Options',
  setup() {
    const jumpToHelp = () => {
      router.push('help');
    };

    const term = ref<string>(
      window.localStorage.getItem('term') || '2020_AUTUMN'
    );

    watchEffect(() => window.localStorage.setItem('term', term.value));

    return {
      jumpToHelp,
      term,
    };
  },
});
</script>

<style scoped lang="scss">
.options-wrapper {
  width: 540px;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 14px;

  > span {
    color: rgba(0, 0, 0, 0.45);
    margin: 4px 0;
  }

  > .override-select {
    color: rgba(0, 0, 0, 0.45);
  }

  > .help-guidance {
    margin-top: 24px;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.4);

    > .override-button-help {
      padding: 0 4px;
    }
  }
}
</style>
