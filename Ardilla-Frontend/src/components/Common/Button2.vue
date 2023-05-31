<template>
  <button type="button" aria-label="button">
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
button {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--button);
  background: #fff;
  padding: 15px 35px;
  border-radius: 80px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--button);
    color: #fff;
  }
}
</style>
