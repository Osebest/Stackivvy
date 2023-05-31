<template>
  <div class="bg-[#F9FAFB] text-[#3D0072] contain py-8">
    <div class="padded py-16 md:py-20">
      <h1
        class="mb-8 md:pb-8 text-[40px] md:text-[60px] font-semibold md:font-bold"
      >
        How We Hire
      </h1>
      <div class="grid gap-6 lg:gap-12 md:grid-cols-3">
        <div>
          <Application />
          <h2 class="text-[24px] font-bold mb-4 mt-3">Application</h2>
          <p class="text-[16px] mb-3">
            Send in your applications and if you are a good fit, we will
            schedule an interview.
          </p>
        </div>
        <div>
          <Clarity />
          <h2 class="text-[24px] font-bold mb-4 mt-3">
            Hiring Managers Interview
          </h2>
          <p class="text-[16px] mb-3">
            The interview comprises a chat or two with the hiring manager and
            your department team lead about your suitability and skills for the
            role.
          </p>
        </div>
        <div>
          <Feedback />
          <h2 class="text-[24px] font-bold mb-4 mt-3">Feedback</h2>
          <p class="text-[16px] mb-3">
            When the process is complete, we give you feedback on your
            performance and we let you know if you have been selected.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Application, Clarity, Feedback } from "../../assets/Icons";
</script>

<style lang="scss" scoped></style>
