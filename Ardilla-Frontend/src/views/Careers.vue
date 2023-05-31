<template>
  <div class="home">
    <Hero class="bg-[#8807F7]" />
    <div class="bg-white py-16">
      <Ardilla />
      <Values />
      <People />
      <Perks />
      <Open />
      <Hire />
      <div class="contain py-16">
        <img src="../assets/Images/PHOTOS.png" alt="photos" class="padded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Careers/Hero.vue";
import Ardilla from "../components/Careers/Ardilla.vue";
import Values from "../components/Careers/Values.vue";
import People from "../components/Careers/People.vue";
import Perks from "../components/Careers/Perks.vue";
import Open from "../components/Careers/Open.vue";
import Hire from "../components/Careers/Hire.vue";
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 120px;
  overflow-x: hidden;
}
</style>
