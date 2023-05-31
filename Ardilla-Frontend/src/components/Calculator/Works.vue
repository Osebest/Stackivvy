<template>
  <div class="padded text-[#3D0072] py-[80px]">
    <h1 class="mb-10 text-[40px] md:text-[60px] font-semibold md:font-bold">
      How It Works
    </h1>
    <div class="flex flex-wrap gap-8 place-content-center">
      <img :src="Plan" alt="plan" />
      <img :src="Target" alt="target" />
      <img :src="Interest" alt="interest" />
    </div>
  </div>
</template>

<script setup>
import { Target, Plan, Interest } from "../../assets/Images";
</script>

<style lang="scss" scoped></style>
