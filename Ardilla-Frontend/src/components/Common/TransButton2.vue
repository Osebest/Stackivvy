<template>
  <div class="transBtn">
    <button class="truncate" type="button" aria-label="button">
      {{ title }}
    </button>
    <BtnIconLight />
  </div>
</template>

<script setup lang="ts">
import { BtnIconLight } from "../../assets/Icons";
defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
.transBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
  border-radius: 100px;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  min-width: 250px;
  max-width: 280px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  button {
    font-size: 16px;
    font-weight: 500;
    background: transparent;
    border: none;
    outline: none;
  }

  &:hover {
    background: rgba(136, 7, 247, 0.17);
  }
}
</style>
