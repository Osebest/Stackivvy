<template>
  <div class="text-[#3D0072] pb-16 md:py-20">
    <div class="contain">
      <h1
        class="padded mb-10 text-[40px] md:text-[60px] font-semibold md:font-bold"
      >
        The Ardilla Culture
      </h1>
    </div>
    <div class="grid grid-cols-11 gap-1 sm:gap-3">
      <img :src="Img1" alt="person" class="h-full col-span-4" />
      <div class="flex flex-col gap-1 sm:gap-3 col-span-3">
        <img :src="Img2" alt="person" />
        <img :src="Img3" alt="person" />
      </div>
      <img :src="Img4" alt="person" class="h-full col-span-4" />
    </div>
    <div class="contain">
      <div
        class="padded flex justify-center gap-6 md:gap-12 flex-col md:flex-row mt-8 md:mt-10"
      >
        <div>
          <h2 class="text-[30px] font-bold mb-4">Experienced professionals</h2>
          <p class="text-[14px] mb-3">
            Experienced financial analysts and coaches. Who have been vetted and
            have a wealth of experience. They will guide you through your
            wealth-building journey.
          </p>
          <p class="text-[14px]">
            We have a great team of diverse and talented professionals who share
            the values of the company. Because of the size of our dream, we need
            more hands on deck and you are always welcome to apply.
          </p>
        </div>
        <div>
          <h2 class="text-[30px] font-bold mb-4">Experienced professionals</h2>
          <p class="text-[14px] mb-3">
            Experienced financial analysts and coaches. Who have been vetted and
            have a wealth of experience. They will guide you through your
            wealth-building journey.
          </p>
          <p class="text-[14px]">
            We have a great team of diverse and talented professionals who share
            the values of the company. Because of the size of our dream, we need
            more hands on deck and you are always welcome to apply.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Img1, Img2, Img3, Img4 } from "../../assets/Images";
</script>

<style scoped></style>
