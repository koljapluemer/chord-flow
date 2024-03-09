<script setup>
import { ref, computed } from "vue";
</script>

<template>
  <main class="p-2 flex flex-col">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <router-view></router-view>
      </div>
    </div>

    <em class="mt-2">
      Tip: Keep the beat by tapping your foot or use a
      <a
        href="https://www.metronomeonline.com/"
        class="underline"
        target="_blank"
      >
        metronome</a
      >.
    </em>
  </main>
</template>

<style>
#ukeChordSvg {
  width: 5vw;
}
</style>
