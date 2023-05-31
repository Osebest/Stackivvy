<template>
  <div class="transBtn" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <button class="truncate" type="button" aria-label="button">
      {{ title }}
    </button>
    <BtnIcon v-if="!hovered" />
    <BtnIconLight v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BtnIcon, BtnIconLight } from "../../assets/Icons";
defineProps({
  title: String,
});

const hovered = ref(false);

const mouseEnter = () => {
  hovered.value = true;
};
const mouseLeave = () => {
  hovered.value = false;
};
</script>

<style scoped lang="scss">
.transBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px 20px;
  border-radius: 100px;
  background: transparent;
  color: var(--button);
  border: 1px solid var(--button);
  min-width: 250px;
  max-width: 300px;
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
    background: var(--button);
    color: #fff;
  }
}
</style>
