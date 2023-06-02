<template>
  <v-row justify="center">
    <v-dialog v-model="isModalOpen" width="600" persistent>
      <div class="bg-white p-6 rounded-xl">
        <div
          @click="$emit('toggleModal')"
          class="flex items-center gap-1 text-xs mb-4 font-[500] cursor-pointer"
        >
          <Back /> Go Back
        </div>
        <div class="flex flex-col items-center justify-center px-5">
          <img :src="ModalImg" alt="modal-img" />
          <img :src="ModalText" alt="modal-text" />
          <p class="text-xs font-[500] text-center text-[#9CA3AF] my-5 w-2/4">
            An email would be sent to you in regards, Thank You
          </p>
          <div class="flex gap-3 mt-3">
            <FacebookPurple />
            <TwitterPurple />
            <InstagramPurple />
          </div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { ref, watch } from "vue";
import { ModalImg, ModalText } from "@/assets/Images";
import {
  Back,
  FacebookPurple,
  TwitterPurple,
  InstagramPurple,
} from "../../assets/Icons";

const props = defineProps({
  isModalOpen: Boolean,
});
const emit = defineEmits(["toggleModal"]);

const isModalOpen = ref(props.isModalOpen);

watch(
  () => props.isModalOpen,
  (val) => {
    isModalOpen.value = val;
  }
);
</script>

<style scoped></style>
