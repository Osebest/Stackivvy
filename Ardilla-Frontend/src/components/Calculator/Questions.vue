<template>
  <div class="padded text-[#3D0072] pt-[60px] pb-[180px]">
    <h1 class="mb-10 text-[25px] md:text-[40px] font-semibold md:font-bold">
      Questions We Have been Asked
    </h1>
    <div v-for="(title, index) in titles" class="w-full">
      <Accordion :title="title" :index="index" />
    </div>
  </div>
</template>

<script setup>
import Accordion from "./Accordion.vue";

const titles = [
  "What are your interest rates?",
  "What happens to my interest when i switch to Halal?",
  "What is the minimum interest rate I am entitled to?",
  "How do I save with Ardilla?",
  "What is Ardilla",
];
</script>

<style lang="scss" scoped></style>
