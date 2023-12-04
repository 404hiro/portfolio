<script setup>
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<template>
  <div class="font-notosansjp">

    <div class="fixed h-10 w-full bg-black flex items-center justify-center">
      <div class="text-center text-white text-sm"> {{ new Date().toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric", month: "short", day: "numeric"
      }) }} </div>
    </div>
    <div class="h-screen bg-[#5b1b3d] pt-10 md:pt-56">
      <router-view></router-view>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-black/60 flex items-center space-x-6 px-6 py-4">
      <a class="h-10 w-10 block">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" />
      </a>
      <a class="h-10 w-10 block">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" />
      </a>

      <span class='grow'></span>

      <a class="w-8 h-8 block text-white">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 276.2 276.2" fill="currentColor">
          <path
            d="M33 2a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM138 2a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM244 67a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM32 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM137 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM243 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM33 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM138 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM244 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65z" />
        </svg>
      </a>
    </div>
  </div>
</template>