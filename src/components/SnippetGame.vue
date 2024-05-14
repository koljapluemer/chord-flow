<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const currentSet = ref("Common Chords");

const songSets = {
  "Common Chords": [
    { name: "A", frets: "2100" },
    { name: "A#", frets: "3211" },
    { name: "Eb", frets: "3331" },
    { name: "E", frets: "1402" },
    { name: "F", frets: "2010" },
    { name: "F#", frets: "3121" },
    { name: "Gb", frets: "3121" },
    { name: "G", frets: "0232" },
    { name: "G#", frets: "1343" },
    { name: "Ab", frets: "1343" },
  ],
};

const exercise = ref([]);

function generateChordProgressionPractice() {
  // add one random chord to the end, but keep only the last 3 chords
  // exclude chords already in the exercise, check by frets
  const filteredList = songSets[currentSet.value].filter(
    (chord) => !exercise.value.some((c) => c.frets === chord.frets)
  );
  const randomChord =
    filteredList[Math.floor(Math.random() * filteredList.length)];
  exercise.value.push(randomChord);

  if (exercise.value.length > 3) {
    exercise.value.shift();
  }
  //   ensure 3 chords always
  if (exercise.value.length < 3) {
    generateChordProgressionPractice();
  }
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
    <!-- if third chord, add opacity-45 -->
    <div
      v-for="(chord, index) in exercise"
      :key="index"
      :class="index === 2 ? 'opacity-20' : ''"
    >
      <h3 class="font-bold">
        <span v-if="index === 2" class="text-italic text-sm">up next:</span>
        {{ chord.name }}
      </h3>
      <uke-chord :frets="chord.frets" :key="chord.name"></uke-chord>
    </div>
  </div>

  <div class="card-actions">
    <button v-if="sessionStarted" @click="stopSession" class="btn btn-sm">
      stop session
    </button>
  </div>
</template>
