<script setup>
import { ref, computed } from "vue";

const commonChords = [
  { name: "A", frets: "2100" },
  { name: "A#", frets: "3211" },
  { name: "Bb", frets: "3211" },
  { name: "B", frets: "4322" },
  { name: "C", frets: "0003" },
  { name: "C#", frets: "1114" },
  { name: "Db", frets: "1114" },
  { name: "D", frets: "2220" },
  { name: "D#", frets: "3331" },
  { name: "Eb", frets: "3331" },
  { name: "E", frets: "1402" },
  { name: "F", frets: "2010" },
  { name: "F#", frets: "3121" },
  { name: "Gb", frets: "3121" },
  { name: "G", frets: "0232" },
  { name: "G#", frets: "1343" },
  { name: "Ab", frets: "1343" },
  { name: "Am", frets: "2000" },
  { name: "A#m", frets: "3111" },
  { name: "Bbm", frets: "3111" },
  { name: "Bm", frets: "4222" },
  { name: "Cm", frets: "0333" },
  { name: "C#m", frets: "1444" },
  { name: "Dbm", frets: "1444" },
  { name: "Dm", frets: "2210" },
  { name: "D#m", frets: "3321" },
  { name: "Ebm", frets: "3321" },
  { name: "Em", frets: "0432" },
  { name: "Fm", frets: "1013" },
  { name: "F#m", frets: "2120" },
  { name: "Gbm", frets: "2120" },
  { name: "Gm", frets: "0231" },
  { name: "G#m", frets: "1342" },
  { name: "Abm", frets: "1342" },
  { name: "A7", frets: "0100" },
  { name: "A#7", frets: "1211" },
  { name: "Bb7", frets: "1211" },
  { name: "B7", frets: "2320" },
  { name: "C7", frets: "0001" },
  { name: "C#7", frets: "1112" },
  { name: "Db7", frets: "1112" },
  { name: "D7", frets: "2223" },
  { name: "D#7", frets: "3334" },
  { name: "Eb7", frets: "3334" },
  { name: "E7", frets: "1202" },
  { name: "F7", frets: "2310" },
  { name: "F#7", frets: "2422" },
  { name: "Gb7", frets: "2422" },
  { name: "G7", frets: "0212" },
  { name: "G#7", frets: "1323" },
  { name: "Ab7", frets: "1323" },
];

const exercise = ref([]);

function generateChordProgressionPractice() {
  // add one random chord to the end, but keep only the last 4 chords
  exercise.value.push(
    commonChords[Math.floor(Math.random() * commonChords.length)]
  );
  if (exercise.value.length > 4) {
    exercise.value.shift();
  }
}

generateChordProgressionPractice();

// next exercise should picked every 10 seconds
setInterval(() => {
  generateChordProgressionPractice();
}, 15000);

const sessionStarted = ref(false);
const timeStampOfSessionStart = ref(0);

// check if sessions[] is in localStorage
const sessions = ref([]);
if (localStorage.getItem("sessions")) {
  sessions.value = JSON.parse(localStorage.getItem("sessions"));
}

function startSession() {
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
}
</script>

<template>
  <main class="p-8">
    <article class="flex gap-2" v-if="sessionStarted">
      <div class="card bg-gray-100 shadow-xl m-4" v-for="chord in exercise">
        <div class="card-body text-gray-800">
          <h3 class="card-title">{{ chord.name }}</h3>
          <uke-chord :frets="chord.frets" :key="chord.name"></uke-chord>
        </div>
      </div>
      <button class="btn" @click="stopSession">Stop</button>
    </article>
    <article v-else>
      <button class="btn btn-primary" @click="startSession">Start</button>
    </article>
    <em
      >don't forget the
      <a
        href="https://www.metronomeonline.com/"
        class="underline"
        target="_blank"
      >
        metronome</a
      >
    </em>
  </main>
</template>

<style scoped></style>
