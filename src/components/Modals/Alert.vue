<template>
  <div class="alert-modal-wrapper" :style="modalStyle">
    <div class="alert-box">
      <div class="alert-message">
        <p>{{ alertMessage }}</p>
      </div>
      <div class="options">
        <button @click="onConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { useWindow } from '@/hooks/useWindow';

export default defineComponent({
  name: 'Alert',
  props: {
    alertMessage: {
      type: String,
      required: true,
    },
    onConfirm: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const { clientSize } = useWindow();
    const modalStyle = computed(() => ({
      width: `${clientSize.width}px`,
      height: `${clientSize.height}px`,
    }));
    return {
      modalStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.alert-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  justify-content: center;

  > .alert-box {
    width: 280px;
    height: 130px;
    border-radius: 8px;
    background: #ffffff;
    display: flex;
    flex-direction: column;

    > .alert-message {
      flex-grow: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .options {
      padding: 0 24px 16px;
      display: flex;
      flex-direction: row-reverse;

      > button {
        background: transparent;
        padding: 4px 8px;
        border: 1px solid rgba(0, 0, 0, 0.54);
        cursor: pointer;

        color: rgba(0, 0, 0, 0.87);

        &:hover {
          background: rgba(0, 0, 0, 0.12);
        }
      }
    }
  }
}
</style>
