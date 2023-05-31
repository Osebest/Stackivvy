<template>
  <div class="word contain shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
    <div class="padded py-[90px]">
      <div>
        <h2>
          <span class="text-[#3d0072]">Don’t Take Our</span>
          <span class="text-[#e8356d]"> Word</span>
          <span class="text-[#3d0072]"> For It</span>
        </h2>
        <p class="mt-5 mb-16">
          Listen to testimonials from Ardilla users building wealth
        </p>
      </div>
      <Carousel
        v-bind:autoplay="true"
        v-bind="settings"
        v-model="currentSlide"
        :autoplay="4000"
        :wrap-around="true"
        :breakpoints="breakpoints"
        ref="cardsCarousel"
      >
        <Slide v-for="(photo, index) in HomePhotos" :key="photo">
          <div class="relative">
            <img :src="photo" alt="Testimonial" class="team-image" />
            <div :class="[currentSlide === index ? 'overlay' : 'hidden']">
              <div><Play /></div>
              <div class="title">
                <h4 class="font-[500] text-sm md:font-bold md:text-xl mb-1">
                  MD - Miss Oyinye Dallas
                </h4>
                <p class="text-xs font-light md:font-normal">
                  What is Ardila and it benefits?
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HomePhotos } from "../../utility/Products";
import { Carousel, Slide } from "vue3-carousel";
import { Play } from "@/assets/Icons";

const currentSlide = ref(0);

const settings = {
  itemsToShow: 1.75,
  snapAlign: "start",
};
const breakpoints = {
  768: {
    itemsToShow: 3,
  },
};
</script>

<style lang="scss" scoped>
.word {
  background: #f3f4f6;
  border: 2px solid whitesmoke;

  h2 {
    span {
      font-size: 80px;
      font-weight: 800;
      line-height: 80px;

      @media (max-width: 768px) {
        font-size: 50px;
        line-height: 50px;
      }
    }
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15.97px;
  transition: all 0.5s ease-in-out;
  color: white;
  cursor: pointer;
  text-align: start;
  padding: 20px;

  .title {
    position: absolute;
    bottom: 20px;
    left: 20px;

    @media (max-width: 768px) {
      bottom: 10px;
      left: 10px;
    }
  }
}
.carousel__slide {
  padding: 8px;
}
.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: grab;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel__slide {
  transform: scale(0.9);
}

.carousel__slide--active {
  transform: scale(1.06);
}
</style>
