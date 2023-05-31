<template>
  <div class="product contain">
    <Carousel
      v-bind:autoplay="true"
      v-bind="settings"
      v-model="currentSlide"
      :autoplay="4000"
      :wrap-around="true"
    >
      <Slide v-for="item in data" :key="item.title">
        <div class="padded w-full cursor-grab pt-[70px] pb-[30px]">
          <h2>Product</h2>
          <div class="flex justify-between gap-8 pl-10 md:ml-3">
            <div>
              <h3
                class="font-semibold md:font-bold text-[30px] md:text-[40px] text-[#E8356D]"
              >
                {{ item.title }}
              </h3>
              <p
                class="mb-2 text-[#3D0072] text-[15px] md:text-[20px] font-[500]"
              >
                {{ item.subtitle }}
              </p>
              <p
                class="mb-8 text-[#9CA3AF] text-[12px] md:text-[15px] font-[500]"
              >
                {{ item.subtitle2 }}
              </p>
              <ul class="flex flex-col gap-5">
                <li
                  class="flex items-center gap-6"
                  v-for="listItem in item.list"
                  :key="listItem"
                >
                  <RedCheck />
                  <span>{{ listItem }}</span>
                </li>
              </ul>
            </div>
            <div class="hidden md:flex">
              <img :src="item.img" alt="Product Phone" />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <ProgressBar :percent="percent" class="mt-10 padded" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { RedCheck } from "../../assets/Icons";
import { data } from "@/utility/Products.js";
import ProgressBar from "../Common/ProgressBar.vue";
import { Carousel, Slide } from "vue3-carousel";

const currentSlide = ref(0);
const percent = ref(0);

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

// Calculate Percentage with currentSlide
watch(currentSlide, (newVal) => {
  percent.value = ((newVal + 1) / data.length) * 100;
});

onMounted(() => {
  percent.value = ((currentSlide.value + 1) / data.length) * 100;
});
</script>

<style lang="scss" scoped>
.product {
  background: #fffdf2;
  border-radius: 25px 25px 0px 0px;
  padding-bottom: 50px;

  h2 {
    font-size: 80px;
    font-weight: 800;
    line-height: 80px;
    color: #3d0072;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
}

li {
  text-align: start !important;
}
.carousel__slide {
  justify-content: start !important;
}
</style>
