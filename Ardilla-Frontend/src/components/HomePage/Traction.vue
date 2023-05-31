<template>
  <div class="traction contain">
    <div
      class="pt-10 pb-16 flex flex-col justify-center text-center gap-3 text-white"
    >
      <h2 class="text-[50px] font-bold md:text-[80px] md:font-[800]">
        Traction
      </h2>
      <p class="font-[500] text-base md:text-[18px]">
        Our products and investments grossed 1.1 billion in 2022
      </p>
    </div>
    <div
      class="padded pb-[250px] flex justify-center md:gap-10 gap-5 items-center flex-wrap"
    >
      <div class="card card1">
        <p>Investment in <span>2022</span></p>
        <h2>#{{ amount }}</h2>
      </div>
      <div ref="cardRef" class="card card2">
        <p>Risk <span>Management</span></p>
        <h2>{{ percent }}% Risk</h2>
      </div>
      <div class="card card3">
        <p>Investment <span>paid back</span></p>
        <h2>#{{ amount }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const amount = ref("100 M");
const percent = ref(100);
const amounts = ref([
  "100 M",
  "200 M",
  "300 M",
  "400 M",
  "500 M",
  "600 M",
  "900 M",
  "1.1 B",
]);
// animate through the amounts array while displaying each amount
const setAmount = () => {
  let i = 0;
  setInterval(() => {
    if (i < amounts.value.length) {
      amount.value = amounts.value[i];
      i++;
    } else {
      clearInterval(setAmount);
    }
  }, 300);
};
const setPercent = () => {
  let i = 100;
  setInterval(() => {
    if (i >= 0) {
      percent.value = i;
      i--;
    } else {
      clearInterval(setPercent);
    }
  }, 30);
};

const cardRef = ref();
const observerOptions = {
  root: null,
  rootMargin: "0px",
  treshold: 1.0,
};

// count to 1.1 billion when cards are in view
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAmount();
        setPercent();
      }
    });
  }, observerOptions);
  observer.observe(cardRef.value);
});
</script>

<style lang="scss" scoped>
.traction {
  background-image: url("@/assets/Images/traction-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 350px;

    @media (max-width: 1024px) {
      height: 400px;
      width: 300px;
    }
  }

  p {
    font-weight: 500;
    font-size: 18px;
  }

  h2 {
    font-size: 70px;
    font-weight: 800;
  }

  .card1 {
    background: #d2ffde;
    border-radius: 70px 70px 0px 70px;

    span {
      background-color: #33593d;
      color: whitesmoke;
      padding: 2px 4px;
    }
  }
  .card2 {
    background: #c8c1fd;
    border-radius: 70px 70px 70px 0px;

    span {
      background-color: #35298a;
      color: whitesmoke;
      padding: 2px 4px;
    }
  }
  .card3 {
    background: #faf7c3;
    border-radius: 70px 70px 70px 0px;

    span {
      background-color: #9f9704;
      color: whitesmoke;
      padding: 2px 4px;
    }
  }
}
</style>
