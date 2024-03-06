<script setup>
import { ref, computed } from "vue";


</script>

<template>
  <main class="p-2 flex flex-col">
    <router-view></router-view>

  </main>

  <!-- <button
    v-if="sessionStarted"
    @click="stopSession"
    class="btn btn-primary fixed z-90 bottom-10 right-8 drop-shadow-xl hover:drop-shadow-2xl duration-300"
  >
    Stop
  </button> -->
</template>

<style>
#ukeChordSvg {
  width: 5vw;
}
</style>
