<template>
  <div class="header flex justify-between items-center py-3">
    <div class="flex justify-center items-center cursor-pointer">
      <router-link :to="{ name: 'home' }">
        <img :src="Logo" alt="logo" />
      </router-link>
    </div>
    <div class="hidden lg:flex">
      <ul
        class="flex items-center justify-between gap-8 xl:gap-20 text-sm text-white"
      >
        <router-link :to="{ name: 'products' }" active-class="active">
          <li class="link flex items-center gap-0">
            <p>Products</p>
            <Dropdown />
          </li>
        </router-link>
        <router-link :to="{ name: 'business' }" active-class="active">
          <li class="link">
            <p class="whitespace-nowrap">
              Business
              <span class="ml-1 border-2 rounded-md py-[1px] px-[2px]"
                >Beta</span
              >
            </p>
          </li>
        </router-link>
        <router-link :to="{ name: 'company' }" active-class="active">
          <li class="link flex items-center gap-0">
            <p>Company</p>
            <Dropdown />
          </li>
        </router-link>
        <router-link :to="{ name: 'learn' }" active-class="active">
          <li class="link"><p>Learn</p></li>
        </router-link>
      </ul>
    </div>
    <div class="hidden lg:flex gap-3 items-center">
      <div class="link"><p class="whitespace-nowrap">Sign In</p></div>
      <Button title="Create Account" class="ml-3" />
      <div class="flex items-center gap-0 cursor-pointer">
        <img :src="Moon" alt="moon" />
        <LightDropdown />
      </div>
    </div>
    <div class="lg:hidden">
      <Hamburger @click="toggleDropdown" />
    </div>
  </div>
  <v-expand-transition>
    <div
      v-if="showDropdown"
      class="shadow-bg h-[90vh] z-50 flex flex-col items-center justify-center"
    >
      <ul
        class="flex flex-col items-center gap-6 text-sm text-white mb-6 transition-all"
      >
        <router-link :to="{ name: 'products' }" active-class="active">
          <li class="link flex items-center gap-0">
            <p>Products</p>
            <Dropdown />
          </li>
        </router-link>
        <router-link :to="{ name: 'business' }" active-class="active">
          <li class="link">
            <p class="whitespace-nowrap">
              Business
              <span class="ml-1 border-2 rounded-md py-[1px] px-[2px]"
                >Beta</span
              >
            </p>
          </li>
        </router-link>
        <router-link :to="{ name: 'company' }" active-class="active">
          <li class="link flex items-center gap-0">
            <p>Company</p>
            <Dropdown />
          </li>
        </router-link>
        <router-link :to="{ name: 'learn' }" active-class="active">
          <li class="link"><p>Learn</p></li>
        </router-link>
      </ul>
      <div class="flex flex-col items-center gap-6">
        <div class="link"><p>Sign In</p></div>
        <Button title="Create Account" class="ml-2" />
      </div>
    </div>
  </v-expand-transition>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Logo, Moon } from "@/assets/Images";
import { LightDropdown, Dropdown, Hamburger } from "../assets/Icons";
import Button from "./Common/Button.vue";

const route = useRoute();

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Forcer Disable scroll on body
watch(showDropdown, (value) => {
  if (value) {
    document.body.style.overflow = "hidden";
    // the container div needs to be set to overflow hidden as well
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("footer")[0].style.display = "none";
  } else {
    document.body.style.overflow = "auto";
    document.getElementsByClassName("home")[0].style.display = "grid";
    document.getElementsByClassName("footer")[0].style.display = "block";
  }
});

// Close Modal on router change
watch(route, () => {
  showDropdown.value = false;
});

</script>

<style lang="scss" scoped>
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
      font-weight: 700;
      transform: scale(1.1);
      background: linear-gradient(
        91.7deg,
        #ffeb35 7.5%,
        rgba(25, 253, 130, 0.99) 107.24%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}
.active {
  background-color: rgba(67, 2, 126, 0.4);
  padding: 10px 15px;
  border-radius: 10px 20px;

  p {
    font-weight: 700;
    transform: scale(1.1);
    background: linear-gradient(
      91.7deg,
      #ffeb35 7.5%,
      rgba(25, 253, 130, 0.99) 107.24%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
</style>
