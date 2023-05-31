<template>
  <div class="bg-[#21003D]">
    <p
      class="contain w-[80%] pt-10 text-center mx-auto font-normal text-[20px] md:text-[30px] leading-[60px] text-white"
    >
      Beyond a competitive salary, we offer so much more in support and
      necessary tools needed to get the best results.
    </p>
    <div class="flex justify-center mt-16 -mb-16 md:pt-10">
      <SlantText class="lg:-mb-28" />
    </div>
    <div class="perks contain flex justify-center items-center">
      <div
        class="padded grid gap-5 sm:gap-10 xl:gap-20 grid-cols-2 lg:grid-cols-3 lg:w-3/4"
      >
        <div>
          <Flower />
          <h4 class="text-xl font-bold my-1">Its a vibe</h4>
          <p class="text-sm">Our work culture is a vibe and more.</p>
        </div>
        <div>
          <SmallPhone />
          <h4 class="text-xl font-bold my-1">Cool gadgets</h4>
          <p class="text-sm">You get to work with cool new gadgets.</p>
        </div>
        <div>
          <Vest />
          <h4 class="text-xl font-bold my-1">Health benefits</h4>
          <p class="text-sm">
            We know health is important. So we provided easy access and
            affordable health benefits.
          </p>
        </div>
        <div>
          <People />
          <h4 class="text-xl font-bold my-1">Team Bounding</h4>
          <p class="text-sm">
            We always make out time for fun and getting to know your team mates
            better.
          </p>
        </div>
        <div>
          <People />
          <h4 class="text-xl font-bold my-1">Diversity</h4>
          <p class="text-sm">
            We promote diversity of ideas and people. Anyone from anywhere is
            welcome.
          </p>
        </div>
        <div>
          <Cap />
          <h4 class="text-xl font-bold my-1">
            Education and career progression
          </h4>
          <p class="text-sm">
            We offer you opportunities to grow, learn, and advance in your
            career.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Flower,
  SlantText,
  Cap,
  People,
  SmallPhone,
  Vest,
} from "../../assets/Icons";
</script>

<style lang="scss" scoped>
.perks {
  background-image: url("@/assets/Images/perks-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: bottom;
  color: #3d0072;
  padding-top: 150px;
  padding-bottom: 100px;
  z-index: 10;

  @media (min-width: 1024px) {
    background-size: contain;
    padding-bottom: 0px;
    padding-top: 200px;
  }
}
</style>
