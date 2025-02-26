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

/* Para navegadores WebKit (Chrome, Edge, Safari) */
::-webkit-scrollbar {
  width: 10px; /* Largura da barra */
}

::-webkit-scrollbar-track {
  background: #0B0122; /* Cor do fundo da barra */
}

::-webkit-scrollbar-thumb {
  background: #5A3E91; /* Cor do botão de rolagem */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7851A9; /* Cor ao passar o mouse */
}

</style>
