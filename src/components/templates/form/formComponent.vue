<template>
  <form class="mt-11 mb-4 flex flex-col z-20" action="">
    <label for="upload-avatar">Upload Avatar</label>
    <!-- Titulo do campo -->
    <input type="file" name="upload-avatar" id="upload-avatar" class="hidden" />
    <!-- O campo de upload, que tem que ser um input do tipo file, que ficará escondido -->
    <div
      class="border-dashed border-4 border-gray-600 rounded-xl bg-opacity grid grid-cols-2 px-24 py-5 gap-3"
    >
      <!-- Div responsável por conter o preview da imagem e os botões de ação, que está delimitado com borda pontilhada para sinalizar ao usuario onde soltar os arquivos -->
      <img
        class="col-span-2 col-start-1 size-20 rounded-xl place-self-center"
        src="@/assets/images/image-avatar.jpg"
        alt="Imagem avatar"
      />
      <!-- Preview da imagem -->
      <button>Remove image</button>
      <button>Change image</button>
    </div>

    <label for="full-name">Full Name</label>
    <input
      type="text"
      name="full-name"
      id="full-name"
      v-model="v$.name.$model"
    />
    <span v-for="error of v$.name.$errors" :key="error.$uid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      {{ error.$message }}
    </span>

    <label for="email">Email Address</label>
    <input type="email" name="email" id="email" v-model="v$.email.$model" />
    <span v-for="error of v$.email.$errors" :key="error.$uid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      {{ error.$message }}
    </span>

    <label for="github">Github Username</label>
    <input type="text" name="github" id="github" v-model="v$.github.$model" />
    <span v-for="error of v$.github.$errors" :key="error.$uid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      {{ error.$message }}
    </span>

    <button class="mt-5" type="submit">Generate My Ticket</button>
  </form>
</template>
<script src="./formComponent.ts"></script>
<style scoped src="./formComponent.css"></style>
