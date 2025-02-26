<template>
  <div
    class="static h-full bg-img bg-no-repeat bg-center bg-[url(@/assets/images/background-desktop.png)]"
  >
    <img
      class="absolute top-0 right-0"
      src="@/assets/images/pattern-squiggly-line-top.svg"
      alt="Detalhe superior"
    />
    <img
      class="absolute bottom-0 left-0"
      src="@/assets/images/pattern-squiggly-line-bottom.svg"
      alt="Detalhe inferior"
    />
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Inconsolata";
  font-style: normal;
  font-weight: 200 700;
  font-display: swap;
  src: url("@/assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf")
    format("ttf");
}

* {
  font-family: "Inconsolata", monospace;
}

.bg-img {
  background-size: 100% 100%;
}
</style>
