<template>
  <div class="trans contain shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
    <div
      class="padded py-[80px] flex flex-col lg:flex-row justify-between lg:items-center gap-3"
    >
      <div>
        <h2>
          <span>We’re Keen On </span>
          <span>Transparency</span>
        </h2>
        <p class="mt-5 mb-10">
          Calculate your interests everytime you save on our platform
        </p>
        <router-link to="/calculator">
          <Button title="Get Started" />
        </router-link>
      </div>
      <div class="mt-8 md:mt-0">
        <img :src="Calculator" alt="calculator" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../Common/Button.vue";
import { Calculator } from "../../assets/Images";
</script>

<style scoped lang="scss">
.trans {
  background: #fff;
  border: 2px solid whitesmoke;

  h2 {
    span {
      display: block;
      font-size: 80px;
      font-weight: 800;
      line-height: 80px;

      @media (max-width: 768px) {
        font-size: 50px;
        line-height: 50px;
      }

      &:first-child {
        color: #3d0072;
      }

      &:last-child {
        color: #e8356d;
      }
    }
  }
}
</style>
