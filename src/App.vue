<template>
  <div class="static h-screen bg-img bg-no-repeat bg-center bg-[url(@/assets/images/background-desktop.png)]">
    <router-view />
    <img class="absolute top-0 right-0" src="@/assets/images/pattern-squiggly-line-top.svg" alt="">
    <img class="absolute bottom-0 left-0" src="@/assets/images/pattern-squiggly-line-bottom.svg" alt="">
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-img {
  background-size: 100% 100%;
}
</style>
