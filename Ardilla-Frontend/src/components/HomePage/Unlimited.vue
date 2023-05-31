<template>
  <div class="limit contain">
    <div class="padded pt-[80px] pb-[100px]">
      <h2>
        <span>Unlimited </span>
        <span>Investment Opportunities</span>
      </h2>
      <p class="mb-8">
        Plan towards your future by investing with ardilla, Grow your money
        confidently and securely with the available investment oppurtuinities
      </p>
      <TransButton title="Invest with ardilla (Coming Soon)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TransButton from "../Common/TransButton.vue";
</script>

<style scoped lang="scss">
.limit {
  background-image: url("@/assets/Images/arrow and background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h2 {
    width: 70%;
    margin-bottom: 15px;

    span {
      font-size: 80px;
      font-weight: 800;
      line-height: 100px;

      @media (max-width: 768px) {
        font-size: 45px;
        line-height: 70px;
      }

      &:first-child {
        color: #3d0072;
      }

      &:last-child {
        color: #0d9488;
      }
    }
  }

  p {
    color: #3d0072;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 500;
    font-size: 24px;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>
