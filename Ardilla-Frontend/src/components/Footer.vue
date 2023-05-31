<template>
  <div class="contain footer">
    <div class="padded">
      <Download />
    </div>
    <div class="padded footed">
      <div
        class="flex pb-6 gap-10 md:gap-6 sm:justify-between flex-wrap border-b-[1px] border-[#D1D5DB]"
      >
        <ul class="text-white flex flex-col gap-6">
          <li class="head mb-3">
            <h2 class="font-semibold text-[14px]">Products</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Savings</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Dilla</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Financial Coach</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Hala</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span
              >Budgeting
              <span
                class="rounded-full ml-1 border-[1px] border-white py-1 px-2"
                >Coming Soon</span
              ></span
            >
          </li>
          <li class="text-[13px] font-[400]">
            <span
              >Investment
              <span
                class="rounded-full ml-1 border-[1px] border-white py-1 px-2"
                >Coming Soon</span
              ></span
            >
          </li>
          <li class="text-[13px] font-[400]">
            <span
              >Insurance
              <span
                class="rounded-full ml-1 border-[1px] border-white py-1 px-2"
                >Coming Soon</span
              ></span
            >
          </li>
        </ul>
        <ul class="text-white flex flex-col gap-5">
          <li class="head mb-3">
            <h2 class="font-semibold text-[14px]">Company</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span>About us</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Careers</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>FAQS</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Press</span>
          </li>
        </ul>
        <ul class="text-white flex flex-col gap-5">
          <li class="head mb-3">
            <h2 class="font-semibold text-[14px]">Transparency</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Terms & conditions</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Information security policy</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Privacy policy</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>Interest Tool</span>
          </li>
        </ul>
        <ul class="text-white flex flex-col gap-5">
          <li class="head mb-3">
            <h2 class="font-semibold text-[14px]">Developer</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span
              >Connect API
              <span
                class="rounded-full ml-1 border-[1px] border-white py-1 px-2"
                >Coming Soon</span
              ></span
            >
          </li>
        </ul>
        <ul class="text-white flex flex-col gap-5">
          <li class="head mb-3">
            <h2 class="font-semibold text-[14px]">Address</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span>33B, Ogundana street, Allen, Ikeja.</span>
          </li>
          <li class="head">
            <h2 class="font-semibold text-[14px]">Contact</h2>
          </li>
          <li class="text-[13px] font-[400]">
            <span>support@ardilla.africa</span>
          </li>
          <li class="text-[13px] font-[400]">
            <span>(234)801 000 1234</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-between gap-5 text-white my-5">
        <div>
          <p class="text-[14px] font-[500] mb-2">
            © 2023 Ardilla. All right reserved
          </p>
          <p class="text-[12px] font-[400]">
            Ardilla operates under the coorperative license of Ardilla
            Multipurpose Cooperative Society, LSC 18245, We provide Savings and
            Fixed deposit services to our users
          </p>
        </div>
        <div class="flex gap-3">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Download from "./Common/Download.vue";
import { Facebook, Twitter, Instagram, LinkedIn } from "@/assets/Icons";
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background: #8807f7;
  padding-bottom: 40px;

  .footed {
    padding-top: 240px;

    @media only screen and (max-width: 769px) and (min-width: 330px) {
      padding-top: 320px;
    }
  }
}
</style>
