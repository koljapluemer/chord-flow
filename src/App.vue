<script setup>
import { ref, computed } from "vue";
</script>

<template>
  <main class="p-2 flex flex-col">
    <router-view></router-view>

    <em class="mt-2">
      don't forget the
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
