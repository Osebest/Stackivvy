<template>
  <div class="hero">
    <h1>Your Access To More</h1>
    <p class="md:w-2/4 px-2 mb-6">
      Ardilla helps you save and invest in achieving your financial goals, we
      have the most flexible and seamless way to grow your funds.
    </p>
    <Button2 title="Get Started" />
    <img :src="HeroPhone" alt="herophone" class="mt-5" />
  </div>
</template>

<script setup>
import { HeroPhone } from "@/assets/images";
import Button2 from "@/components/Common/Button2.vue";
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/images/Hero-background.png");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-top: 120px;
  text-align: center;

  h1 {
    font-weight: 800;
    font-size: 95px;
    line-height: 110px;
    background: linear-gradient(
      91.7deg,
      #ffeb35 7.5%,
      rgba(25, 253, 130, 0.99) 107.24%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 70px;
    }
  }
}
</style>
