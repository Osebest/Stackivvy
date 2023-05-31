<template>
  <div class="word contain">
    <div class="padded text-white pt-20">
      <h2 class="title">Access More With Your Money</h2>
      <p class="w-3/4 mt-4 mb-6">
        Earn, learn, parlay, and grow financially. With Ardilla, you have more
        opportunities than ever at your finger tips. Why not take advantage
        today?
      </p>
      <TransButton2 title="Learn more about savings" />
      <div class="card">
        <div v-for="item in data" :key="item.image" class="subcard">
          <img :src="item.image" alt="icons" class="-ml-14" />
          <div class="-mt-8">
            <h3 class="font-semibold text-lg">{{ item.title }}</h3>
            <p class="font-[400] my-6 w-full md:w-3/4">
              {{ item.description }}
            </p>
            <p class="font-semibold">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TransButton2 from "../Common/TransButton2.vue";
import { Yellow, Green, Red, Purple } from "../../assets/Images";

const data = [
  {
    title: "DIB",
    description:
      "Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.",
    image: Yellow,
  },
  {
    title: "Dreams",
    description:
      "Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.",
    image: Red,
  },
  {
    title: "Vault",
    description:
      "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
    image: Green,
  },
  {
    title: "Grit",
    description:
      "Become a VIP when you save more money with us. Enjoy better benefits.",
    image: Purple,
  },
];
</script>

<style lang="scss" scoped>
.title {
  font-size: 80px;
  font-weight: 800;
  line-height: 80px;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 50px;
  }
}
.card {
  margin-top: 80px;
  box-shadow: 0px 10px 35px rgba(6, 46, 253, 0.25),
    0px 15px 70px rgba(251, 64, 64, 0.25), 0px 30px 90px rgba(136, 7, 247, 0.5);
  border-radius: 4px;
  border: 1px solid #6902c4;
  padding: 90px;
  background: linear-gradient(0deg, #29014b, #29014b),
    linear-gradient(
      132.09deg,
      #8807f7 10.33%,
      rgba(3, 105, 161, 0) 103.27%,
      #17a1fa 103.27%
    );
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    grid-gap: 30px;
  }

  .subcard {
    padding: 20px;

    &:hover {
      background: #43027e;
      border-radius: 24px;
    }
  }
}
</style>
