<template>
  <div class="text-white flex flex-col items-center">
    <img class="mt-12 mb-14" src="@/assets/images/logo-full.svg" alt="Logo" />
    <div class="text-5xl font-bold text-center space-words mb-4">
      Your Journey to Coding Conf <br />
      <div class="mt-3">2025 Starts Here!</div>
    </div>
    <span class="text-[1.4rem] text-slate-300"
      >Secure your spot at next year´s biggest coding conference</span
    >
    <form class="mt-11 flex flex-col" action="">
      <label for="upload-avatar">Upload Avatar</label> <!-- Titulo do campo -->
      <input
        type="file"
        name="upload-avatar"
        id="upload-avatar"
        class="hidden"
      /> <!-- O campo de upload, que tem que ser um input do tipo file, que ficará escondido -->
      <div
        class="border-dashed border-4 border-gray-600 rounded-xl bg-opacity grid grid-cols-2 px-24 py-5 gap-3"
      ><!-- Div responsável por conter o preview da imagem e os botões de ação, que está delimitado com borda pontilhada para sinalizar ao usuario onde soltar os arquivos -->
        <img class="col-span-2 col-start-1 size-20 rounded-xl place-self-center" src="@/assets/images/image-avatar.jpg" alt="Imagem avatar" /> <!-- Preview da imagem -->
        <button>Remove image</button>
        <button>Change image</button>
      </div>

      <label for="full-name">Full Name</label>
      <input type="text" name="full-name" id="full-name" />

      <label for="email">Email Address</label>
      <input type="email" name="email" id="email" />

      <label for="github">Github Username</label>
      <input type="text" name="github" id="github" />

      <button class="mt-5" type="submit">Generate My Ticket</button>
    </form>
  </div>
</template>
<script src="./home.ts"></script>
<style scoped src="./home.css"></style>
