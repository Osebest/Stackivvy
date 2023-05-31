<template>
  <div class="traction contain">
    <div class="padded text-white grid md:grid-cols-2 gap-4">
      <div>
        <h2 class="text-[30px] font-semibold md:text-[40px] md:font-[700] mb-8">
          Calculate Your Interests
        </h2>
        <div class="w-3/4">
          <p class="text-[#9CA3AF]">How often are you saving?</p>
          <v-select
            class="my-input"
            v-model="selected"
            :items="['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']"
            variant="outlined"
          ></v-select>
          <p class="text-[#9CA3AF] mt-3">How much are you saving?</p>
          <v-text-field
            type="number"
            v-model="number"
            variant="underlined"
            class="my-input2"
          ></v-text-field>
          <p class="text-[#9CA3AF] mt-3">
            How long are you saving for? (In months)
          </p>
          <v-text-field
            type="number"
            v-model="number2"
            variant="underlined"
            class="my-input2"
          ></v-text-field>
        </div>
      </div>
      <div class="calc">
        <div class="mb-3">
          <small class="text-gray-400 text-xs">Total Balance</small>
          <h4 class="text-[#3D0072] text-xl font-bold">N6,600</h4>
        </div>
        <div class="mb-3">
          <small class="text-gray-400 text-xs">Interest</small>
          <h4 class="text-[#3D0072] text-xl font-bold">
            N600 <span class="font-light text-sm">( 2%)</span>
          </h4>
        </div>
        <div class="flex flex-col">
          <small class="text-gray-400 text-xs">Total Saving</small>
          <h4 class="text-[#3D0072] text-xl font-bold">
            N6000 <span class="font-light text-sm">( 2%)</span>
          </h4>
          <img src="../../assets/Images/graph.png" alt="graph" class="-mt-7" />
        </div>
        <Button title="Start Saving Now" class="mt-8" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../Common/Button.vue";

const selected = ref("Monthly");
const number = ref(2000);
const number2 = ref(2);
</script>

<style lang="scss" scoped>
.traction {
  background-image: url("@/assets/Images/calculator-hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 130px;

  .calc {
    margin-top: 50px;
    background: rgba(243, 244, 246, 1);
    border-radius: 16px 16px 0px 0px;
    padding: 40px;
  }
}
</style>
