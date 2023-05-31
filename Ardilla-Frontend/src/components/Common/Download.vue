<template>
  <div class="download">
    <div class="flex flex-col justify-center md:block">
      <h2
        class="text-white md:leading-10 text-xl md:text-4xl font-semibold mb-6"
      >
        Download for free Start saving Today
      </h2>
      <button class="mb-10" type="button" aria-label="button">Download for free</button>
    </div>
    <div>
      <img :src="DownloadPhone" alt="Phone" />
    </div>
  </div>
</template>

<script setup>
import { DownloadPhone } from "@/assets/Images";
import Button2 from "./Button2.vue";
</script>

<style lang="scss" scoped>
.download {
  position: absolute;
  inset: -120px 0 auto 0;
  width: 60%;
  margin: 0 auto;
  background-image: url("@/assets/Images/download-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px 0 20px;
    width: 70%;
  }

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--button);
    background: #fff;
    padding: 15px 10px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--button);
      color: #fff;
    }
  }
}
</style>
