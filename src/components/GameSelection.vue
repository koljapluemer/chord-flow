<template>
  <h2 class="card-title">Let's practice your ukulele skills.</h2>

  <p>What do you want to practice today?</p>

  <div class="card-actions">
    <button class="btn btn-primary" @click="$router.push('/chord-game')">
      Chord Switching
    </button>
    <button
      class="btn btn-secondary"
      @click="$router.push('/strumming-pattern-game')"
    >
      Strumming Patterns
    </button>
    <!-- Finger Picking -->
    <button
      class="btn btn-secondary"
      @click="$router.push('/finger-picking-game')"
    >
      Finger Picking
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
