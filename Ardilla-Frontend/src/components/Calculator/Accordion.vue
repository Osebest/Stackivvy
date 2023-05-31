<template>
  <div>
    <div class="card">
      <div
        class="flex items-center justify-between py-[18px] px-[25px] rounded-[16px]"
      >
        <div class="flex items-center">
          <p class="font-[500] text-[16px]">{{ title }}</p>
        </div>
        <div>
          <v-icon
            v-if="!showDetails?.show || showDetails?.index !== index"
            @click="toggleShowDetails(index)"
          >
            <Plus class="cursor-pointer" />
          </v-icon>

          <v-icon v-else @click="toggleShowDetails(index)">
            <p class="cursor-pointer w-[15px] h-[3px] bg-[#3D0072]"></p>
          </v-icon>
        </div>
      </div>
      <v-expand-transition>
        <div
          v-if="showDetails?.show && showDetails?.index === index"
          class="bg-[#FAF5FF] py-[10px] px-[20px] rounded-[16px]"
        >
          <p>Some questions</p>
        </div>
      </v-expand-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Plus from "../../assets/Icons/Plus.vue";

defineProps<Props>();

const showDetails = ref<ShowDetails>();

const toggleShowDetails = (index: number) => {
  if (showDetails.value?.show && showDetails.value?.index === index) {
    showDetails.value = { show: false, index: -1 };
  } else {
    showDetails.value = { show: true, index };
  }
};

interface ShowDetails {
  index: number;
  show: boolean;
}

interface Props {
  index: number;
  title?: string;
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  border-radius: 16px;
  width: 100%;
  color: #8807f7;
  margin-bottom: 20px;

  &:hover {
    background-color: #faf5ff;
  }
}
</style>
