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

      <label for="upload-avatar">Upload Avatar</label>
      <input type="file" name="upload-avatar" id="upload-avatar">
      <span></span>
    
      <label for="full-name">Full Name</label>
      <input type="text" name="full-name" id="full-name">
      
      <label for="email">Email Address</label>
      <input type="email" name="email" id="email">

      <label for="github">Github Username</label>
      <input type="text" name="github" id="github">

      <button class="mt-5" type="submit">Generate My Ticket</button>
    </form>
  </div>
</template>
<script src="./home.ts"></script>
<style scoped src="./home.css"></style>
