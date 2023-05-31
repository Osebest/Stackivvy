<template>
  <div>
    <div class="nav contain">
      <div class="padded flex justify-between items-center py-3">
        <div class="flex justify-center items-center cursor-pointer">
          <img :src="Logo" alt="logo" />
        </div>
        <div class="hidden lg:flex gap-1 items-center">
          <span class="w-1 h-1 rounded-full bg-white"></span>
          <div class="link"><p>Features</p></div>
        </div>
        <div class="lg:hidden">
          <Hamburger />
        </div>
      </div>
      <div class="hero padded">
        <img :src="HeaderText" alt="hero" class="w-2/4 md:w-2/4" />
        <p
          class="text-[11px] md:text-xs font-[500] md:w-2/5 text-center mt-8 mb-8 leading-6 z-30"
        >
          Wealth building is possible. You just need the right partner. With
          better financial tools, Ardilla has made it so much easier for you to
          start building wealth. Take advantage of the Ardilla platform by
          signing up with your email address.
        </p>
        <form
          @submit.prevent="handleSubmit"
          class="bg-white flex justify-between items-center rounded-full p-[3px] pr-[4px]"
        >
          <input
            type="email"
            required
            aria-label="email"
            v-model="email"
            placeholder="someone@example.com"
            class="w-full bg-transparent border-none outline-none p-3 sm:mx-3"
          />
          <button type="submit" aria-label="button">
            Access More <AccessMore />
          </button>
        </form>
        <div
          class="flex justify-end absolute phones z-0 right-0 bottom-[-80px] md:bottom-[-100px]"
        >
          <img :src="LandingPhones" alt="phones" class="w-[30%] md:w-[70%]" />
        </div>
      </div>
    </div>
    <div class="contain">
      <div class="padded pt-10 pb-16">
        <img :src="LandingBtn" alt="page-button" class="mb-5" />
        <div class="hidden md:flex justify-end mb-6">
          <Next @click="next" />
        </div>
        <Carousel
          v-bind:autoplay="true"
          v-bind="settings"
          v-model="currentSlide"
          :autoplay="3000"
          :wrap-around="true"
          :breakpoints="breakpoints"
          ref="cardsCarousel"
        >
          <Slide v-for="photo in LandingPhotos" :key="photo">
            <div class="flex justify-center items-center cursor-grab">
              <img :src="photo" alt="cards" class="w-full" />
            </div>
          </Slide>
        </Carousel>
        <ProgressBar class="mt-8" :percent="percent" />
        <div class="mt-12 flex flex-wrap justify-between items-center gap-5">
          <p class="text-[13px] font-[500] text-[#8807f7] mr-3">
            © 2023 Ardilla. All right reserved
          </p>
          <div class="flex gap-3">
            <FacebookPurple />
            <TwitterPurple />
            <InstagramPurple />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :is-modal-open="isModalOpen" @toggle-modal="toggleModal" />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { Logo, HeaderText, LandingPhones, LandingBtn } from "@/assets/Images";
import {
  Hamburger,
  AccessMore,
  FacebookPurple,
  TwitterPurple,
  InstagramPurple,
  Next,
} from "../assets/Icons";
import Modal from "../components/Common/Modal.vue";
import { LandingPhotos } from "../utility/Products";
import ProgressBar from "../components/Common/ProgressBar.vue";
import { Carousel, Slide } from "vue3-carousel";

const email = ref('')
const isModalOpen = ref(false);
const currentSlide = ref(0);
const percent = ref(0);
const cardsCarousel = ref(null);

const next = () => {
  cardsCarousel.value.next();
};

const settings = {
  itemsToShow: 1.5,
  snapAlign: "start",
};
const breakpoints = {
  768: {
    itemsToShow: 2.5,
  },
  960: {
    itemsToShow: 3.5,
  },
  1024: {
    itemsToShow: 4,
  },
};

// Calculate Percentage with currentSlide
watch(currentSlide, (newVal) => {
  percent.value = ((newVal + 1) / LandingPhotos.length) * 100;
});

onMounted(() => {
  percent.value = ((currentSlide.value + 1) / LandingPhotos.length) * 100;
});

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const handleSubmit = () => {
  toggleModal();
  console.log(email.value);
  email.value = ''
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-image: url("@/assets/Images/landing-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 150px;
  color: #fff;

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    background: var(--button);
    padding: 12px 20px;
    border-radius: 80px;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    &:hover {
      background: var(--button-hover);
    }

    @media (max-width: 600px) {
      padding: 10px 10px;
    }
  }
}
.link {
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    p {
      font-weight: 600;
      transform: scale(1.1);
    }
  }
}
.carousel__slide {
  padding: 8px;
}
</style>
