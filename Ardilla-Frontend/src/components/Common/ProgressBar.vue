<template>
  <div class="">
    <div class="progress">
      <div class="in-progress" :style="`width: ${percent}%;`"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  percent: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 5px;
  background-color: #f3f4f6;
  border-radius: 6px;

  .in-progress {
    width: 0%;
    height: 100%;
    background-color: #8807f7;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
  }
}
</style>
