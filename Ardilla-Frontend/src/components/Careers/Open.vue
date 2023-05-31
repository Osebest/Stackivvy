<template>
  <div class="text-[#3D0072] contain">
    <div class="padded py-12 md:py-20">
      <h1 class="mb-8 text-[40px] md:text-[60px] font-semibold md:font-bold">
        Open Positions
      </h1>
      <div class="grid sm:grid-cols-2 gap-8">
        <img :src="Pos1" alt="position" />
        <img :src="Pos2" alt="position" />
        <img :src="Pos3" alt="position" />
        <img :src="Pos4" alt="position" />
      </div>
      <ProgressBar class="mt-10" :percent="30" />
      <Arrows class="mt-8"/>
    </div>
  </div>
</template>

<script setup>
import { Pos1, Pos2, Pos3, Pos4 } from "../../assets/Images";
import ProgressBar from "../Common/ProgressBar.vue";
import { Arrows } from "../../assets/Icons";
</script>

<style lang="scss" scoped></style>
