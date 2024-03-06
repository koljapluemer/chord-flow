<template>
  <article>
    <h2 class="text-xl font-bold">Let's practice some uke chords.</h2>

    <div class="flex gap-2 flex-col my-8">
      <button class="btn btn-primary" @click="$router.push('/chord-game')">
        Practice Chords
      </button>
      <button class="btn btn-secondary" @click="$router.push('/strumming-pattern-game')">
        Practice Strumming Patterns
      </button>
    </div>


  </article>
</template>

<script setup>
import { ref } from "vue";
</script>
