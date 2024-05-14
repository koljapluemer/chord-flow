<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const exercise = ref(0);

function generateChordProgressionPractice() {
  // set exercise to rng number between 0 and 39
  exercise.value = Math.floor(Math.random() * 40);
}

const sessionStarted = ref(false);
const timeStampOfSessionStart = ref(0);

// check if sessions[] is in localStorage
const sessions = ref([]);
if (localStorage.getItem("sessions")) {
  sessions.value = JSON.parse(localStorage.getItem("sessions"));
}

function startSession() {
  generateChordProgressionPractice();
  // next exercise should picked every 20 seconds
  setInterval(() => {
    generateChordProgressionPractice();
  }, 18000);

  sessionStarted.value = true;
  timeStampOfSessionStart.value = Date.now();
}

function stopSession() {
  sessionStarted.value = false;
  sessions.value.push({
    started: timeStampOfSessionStart.value,
    ended: Date.now(),
  });
  timeStampOfSessionStart.value = 0;
  localStorage.setItem("sessions", JSON.stringify(sessions.value));
  // kill the interval
  clearInterval();
  // cleanup
  exercise.value = [];
  $router.push("/");
}

startSession();
</script>

<template>
  <h2 class="card-title">Switch between these two chords every 4 beats:</h2>
  <div class="bg-gray-100 p-2 flex gap-2 flex-wrap">
    <img  src="`/demo_snippets/legend.png`" />
    <img :src="`/demo_snippets/${exercise}.png`" />
  </div>

  <div class="card-actions">
    <button v-if="sessionStarted" @click="stopSession" class="btn btn-sm">
      stop session
    </button>
  </div>
</template>
