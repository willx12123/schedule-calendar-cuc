<template>
  <div
    class="drag-in-wrapper"
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @drop.prevent.stop="handleFileDrop"
  >
    拖拽到此处
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as XLSX from 'xlsx';

import { cal } from '@/store';

import { handleDate } from '@/lib/handleDate';
import { handleSheet } from '@/lib/handleSheet';

export default defineComponent({
  name: 'DropBox',
  setup() {
    const handleFileDrop = (e: DragEvent) => {
      const files = e.dataTransfer?.files;
      const f = files?.[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const classes = handleSheet(workbook.Sheets);
        alert('处理成功，请点击下载日历文件');
        classes.forEach((item) => {
          const {
            id,
            name,
            classroom,
            teacher,
            startWeek,
            endWeek,
            start,
            end,
            day,
          } = item;
          cal.addEvent(
            `${id} ${name}`,
            teacher,
            classroom,
            handleDate(startWeek, day, start).toString(),
            handleDate(startWeek, day, end, true).toString(),
            {
              freq: 'WEEKLY',
              until: handleDate(endWeek + 1, day),
            }
          );
        });
      };
      f && reader.readAsArrayBuffer(f);
    };
    return {
      handleFileDrop,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-in-wrapper {
  width: 640px;
  height: 346px;
  background: #d8d8d8;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
