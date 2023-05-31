<script setup>
import Hero from "../components/HomePage/Hero.vue";
import Transparency from "../components/HomePage/Transparency.vue";
import Unlimited from "../components/HomePage/Unlimited.vue";
import LogoSection from "../components/HomePage/LogoSection.vue";
import Traction from "../components/HomePage/Traction.vue";
import Word from "../components/HomePage/Word.vue";
import Access from "../components/HomePage/Access.vue";
import Product from "../components/HomePage/Product.vue";
</script>

<template>
  <main class="home">
    <Hero />
    <Product />
    <Transparency />
    <Unlimited />
    <Access />
    <Word />
    <LogoSection />
    <Traction />
  </main>
</template>

<style lang="scss" scoped>
.home {
  background-color: var(--home-background);
  overflow-x: hidden;
}
</style>
