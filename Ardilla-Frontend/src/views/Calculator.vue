<template>
  <div class="home">
    <Hero />
    <div class="bg-white contain">
      <Interest />
      <Works />
      <Questions />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Calculator/Hero.vue";
import Interest from "../components/Calculator/Interest.vue";
import Works from "../components/Calculator/Works.vue";
import Questions from "../components/Calculator/Questions.vue";
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--calculator-background);
  overflow-x: hidden;
}
</style>
