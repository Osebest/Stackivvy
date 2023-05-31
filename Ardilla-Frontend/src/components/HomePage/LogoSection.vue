<template>
  <div class="trans">
    <div class="mb-16">
      <img :src="LogoGroup" alt="" />
    </div>
    <div
      class="card shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
    >
      <h2>Also Available on the Web</h2>
      <p class="md:w-3/4">
        Increase your bread & butter on the app or on the web.The Ardilla app
        services are also available on the web.
      </p>
      <img :src="Access" alt="Access" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LogoGroup, Access } from "../../assets/Images";
</script>

<style scoped lang="scss">
.trans {
  background: #f8fafc;
  border: 2px solid whitesmoke;
  padding: 60px 80px 100px 80px;
  border: 3px solid whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card {
    background: #f3f4f6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 40px 20px 0px 20px;
    color: #3d0072;
    text-align: center;

    h2 {
      font-size: 35px;
      font-weight: 800;
      line-height: 43px;
    }
  }
}
</style>
