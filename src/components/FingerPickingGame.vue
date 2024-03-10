<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const easyChords = [
  { name: "Am", frets: "2000" },
  { name: "C", frets: "0003" },
  { name: "G", frets: "0232" },
  { name: "F", frets: "2010" },
  { name: "A", frets: "2100" },
  { name: "A7", frets: "0100" },
  { name: "C7", frets: "0001" },
];

const defaultPickingData = [
  {
    name: "The Claw",
    moves: "G-E-A-E-",
    difficulty: 0.2,
  },
  {
    name: "Alternating Claw",
    moves: "G-E-A-C-E-A-E-",
    difficulty: 0.4,
  },
  {
    name: "Thumb and Finger",
    moves: "G-C-E-A-",
    difficulty: 0.3,
  },
  {
    name: "Rolling Arpeggio",
    moves: "A-E-C-G-",
    difficulty: 0.5,
  },
  {
    name: "Triplets",
    moves: "G-G-E-E-C-C-A-A-",
    difficulty: 0.6,
  },
  {
    name: "Spanish Fan",
    moves: "E-A-C-E-A-C-E-A-",
    difficulty: 0.7,
  },
  {
    name: "Classical Waltz",
    moves: "A-E-C-E-A-E-C-E-",
    difficulty: 0.6,
  },
  {
    name: "Island Strum",
    moves: "G-E-C-E-",
    difficulty: 0.4,
  },
  {
    name: "Folk Waltz",
    moves: "G-C-E-C-G-E-C-E-",
    difficulty: 0.6,
  },
  {
    name: "Walking Bass",
    moves: "G-E-A-D-",
    difficulty: 0.5,
  },
];

const pickings = ref([]);
const chordsToSwitchBetween = ref([]);
const picking = ref();

function start() {
  const storedPickings = JSON.parse(localStorage.getItem("pickings"));

  if (storedPickings) {
    pickings.value = storedPickings;
  } else {
    pickings.value = defaultPickingData;
  }

  picking.value =
    pickings.value[Math.floor(Math.random() * pickings.value.length)];

  pickTwoRandomChords();
}

function pickTwoRandomChords() {
  const randomChords = easyChords.sort(() => Math.random() - 0.5).slice(0, 2);
  chordsToSwitchBetween.value = randomChords;
}

function getEasierPattern(currentPattern) {
  const patternsWithoutCurrent = pickings.value.filter(
    (pattern) => pattern.name !== currentPattern.name
  );
  // sort patterns by difficulty, lowest first
  const sortedPatterns = patternsWithoutCurrent.sort(
    (a, b) => a.difficulty - b.difficulty
  );

  // get 3 patterns: if possible, easier than current — if there are less than 3 patterns easiert than the current, get the 3 easiest
  const patternsEasierThanCurrent = patternsWithoutCurrent.filter(
    (pattern) => pattern.difficulty < currentPattern.difficulty
  );
  const patternsToChooseFrom =
    patternsEasierThanCurrent.length > 0
      ? patternsEasierThanCurrent
      : sortedPatterns.slice(0, 3);
  return patternsToChooseFrom[
    Math.floor(Math.random() * patternsToChooseFrom.length)
  ];
}

function getHarderPattern(currentPattern) {
  const patternsWithoutCurrent = pickings.value.filter(
    (pattern) => pattern.name !== currentPattern.name
  );
  // sort patterns by difficulty, highest first
  const sortedPatterns = patternsWithoutCurrent.sort(
    (a, b) => b.difficulty - a.difficulty
  );

  // get 3 patterns: if possible, harder than current — if there are less than 3 patterns harder than the current, get the 3 hardest
  const patternsHarderThanCurrent = patternsWithoutCurrent.filter(
    (pattern) => pattern.difficulty > currentPattern.difficulty
  );
  const patternsToChooseFrom =
    patternsHarderThanCurrent.length > 0
      ? patternsHarderThanCurrent
      : sortedPatterns.slice(0, 3);
  return patternsToChooseFrom[
    Math.floor(Math.random() * patternsToChooseFrom.length)
  ];
}

function getNewPicking(difficulty) {
  // with chance of 35%, get a new chords as well
  if (Math.random() < 0.35) {
    pickTwoRandomChords();
  }
  // assuming that if the user wants a harder one, this is easier, and vice-versa
  picking.value.difficulty = (picking.value.difficulty + difficulty) / 2;

  // get random pattern
  picking.value =
    difficulty > 0
      ? getHarderPattern(picking.value)
      : getEasierPattern(picking.value);

  localStorage.setItem("pickings", JSON.stringify(pickings.value));
}

start();
</script>

<template>
  <h2 class="card-title">Switch between these two chords every 4 beats:</h2>

  <div class="bg-white">
    <uke-chord
      :frets="chord.frets"
      :key="chord.name"
      v-for="chord in chordsToSwitchBetween"
      :name="chord.name"
      class=""
    ></uke-chord>
  </div>

  <p>Pluck the following strings with your fingers:</p>
  <div class="overflow-x-auto max-w-full">
    <table class="table table-xs font-bold" :key="picking.name">
      <tr>
        <td v-for="move in picking.moves.split('')" :key="move">
          {{ move }}
        </td>
      </tr>
    </table>
  </div>

  <!-- two buttons, one for 'get harder', 'get easier' -->
  <p>Switch pattern?</p>
  <div class="card-actions">
    <button @click="getNewPicking(-1)" class="btn btn-sm btn-secondary">
      go harder
    </button>
    <button @click="getNewPicking(1)" class="btn btn-sm btn-primary">
      go easier
    </button>
    <router-link to="/" class="btn btn-sm">stop session </router-link>
  </div>
</template>
