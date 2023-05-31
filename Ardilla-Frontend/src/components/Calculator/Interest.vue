<template>
  <div class="padded text-[#3D0072] pt-[80px] pb-[60]">
    <h1 class="mb-10 text-[40px] md:text-[60px] font-semibold md:font-bold">
      Interest you can count on
    </h1>
    <div class="flex flex-col md:flex-row justify-between">
      <v-timeline side="end" align="start" class="w-full">
        <v-timeline-item dot-color="#8807F7" fill-dot size="x-small">
          <template v-slot:icon>
            <span class="w-[10px] h-[10px] bg-white rounded-full"></span>
          </template>
          <div>
            <h4 class="font-bold text-[22px] mb-3">More Interest</h4>
            <p class="text-sm md:w-3/4">
              Enjoy better interest rates than the average bank account when you
              save with any of the Ardilla savings plan.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="#8807F7" fill-dot size="x-small">
          <template v-slot:icon>
            <span class="w-[10px] h-[10px] bg-white rounded-full"></span>
          </template>
          <div>
            <h4 class="font-bold text-[22px] mb-3">Transparency</h4>
            <p class="text-sm md:w-3/4">
              No hidden charges and no vague deductions. Save with Ardilla and
              get your full interests.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
      <v-timeline side="end" align="start" class="w-full">
        <v-timeline-item dot-color="#8807F7" fill-dot size="x-small">
          <template v-slot:icon>
            <span class="w-[10px] h-[10px] bg-white rounded-full"></span>
          </template>
          <div>
            <h4 class="font-bold text-[22px] mb-3">Values</h4>
            <p class="text-sm md:w-3/4">
              Your values matter to us and we are 100% committed to upholding
              those. Whether it is with Halal or the Ardilla saving plans.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="#8807F7" fill-dot size="x-small">
          <template v-slot:icon>
            <span class="w-[10px] h-[10px] bg-white rounded-full"></span>
          </template>
          <div>
            <h4 class="font-bold text-[22px] mb-3">Complete Withdraws</h4>
            <p class="text-sm md:w-3/4">
              Withdraw your entire savings+ interest upon maturity. No minimum
              balance.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
