<template>
  <div class="h-screen bg-img bg-no-repeat bg-center bg-[url(@/assets/images/background-desktop.png)]">
    <router-view />
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
