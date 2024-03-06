<template>
  <button
    @click="stopSession"
    class="btn btn-primary fixed z-90 bottom-10 right-8 drop-shadow-xl hover:drop-shadow-2xl duration-300"
  >
    Stop
  </button>
</template>

<script setup>
import { ref } from "vue";
// route to /
import { useRouter } from "vue-router";
const $router = useRouter();

function stopSession() {
  $router.push("/");
}
</script>
