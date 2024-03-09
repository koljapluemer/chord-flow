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

const defaultStrummingPatternData = [
  {
    name: "Island Strum",
    moves: "↓-↓↑-↑↓↑",
    difficulty: 0.6,
  },
  {
    name: "Simple X",
    moves: "↓-↑-x-↑-",
    difficulty: 0.4,
  },
  {
    name: "UpDownUpDown Forever",
    moves: "↓↑↓↑↓↑↓↑",
    difficulty: -0.2,
  },
  {
    name: "Learning Island, Lvl 0",
    moves: "↓-↓↑↓---",
    difficulty: 0.2,
  },
  {
    name: "Learning Island, Lvl 1",
    moves: "↓-↓↑↓-↓↑",
    difficulty: 0.35,
  },
  {
    name: "Learning Island, Lvl 2",
    moves: "↓-↓↑↓↑↓↑",
    difficulty: 0.5,
  },
];

const strummingPatterns = ref([]);
const chordsToSwitchBetween = ref([]);
const strummingPattern = ref();

function start() {
  const storedStrummingPatterns = JSON.parse(
    localStorage.getItem("strummingPatterns")
  );

  if (storedStrummingPatterns) {
    strummingPatterns.value = storedStrummingPatterns;
  } else {
    strummingPatterns.value = defaultStrummingPatternData;
  }

  strummingPattern.value =
    strummingPatterns.value[
      Math.floor(Math.random() * strummingPatterns.value.length)
    ];

  pickTwoRandomChords();
}

function pickTwoRandomChords() {
  const randomChords = easyChords.sort(() => Math.random() - 0.5).slice(0, 2);
  chordsToSwitchBetween.value = randomChords;
}

function getNewStrummingPattern(difficulty) {
  // with chance of 35%, get a new chords as well
  if (Math.random() < 0.35) {
    pickTwoRandomChords();
  }
  // assuming that if the user wants a harder one, this is easier, and vice-versa
  strummingPattern.value.difficulty =
    (strummingPattern.value.difficulty + difficulty) / 2;

  // get random pattern, except the one we have
  let newPattern =
    strummingPatterns.value[
      Math.floor(Math.random() * strummingPatterns.value.length)
    ];
  while (newPattern.name === strummingPattern.value.name) {
    newPattern =
      strummingPatterns.value[
        Math.floor(Math.random() * strummingPatterns.value.length)
      ];
  }
  strummingPattern.value = newPattern;

  localStorage.setItem(
    "strummingPatterns",
    JSON.stringify(strummingPatterns.value)
  );
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

  <p>using this strumming pattern:</p>
  <!-- make a table -->
  <!-- first row 1-2-3-4- -->
  <!-- second row: the pattern -->
  <div class="overflow-x-auto max-w-full">
    <table class="table table-xs font-bold" :key="strummingPattern.name">
      <tr>
        <td>1</td>
        <td>-</td>
        <td>2</td>
        <td>-</td>
        <td>3</td>
        <td>-</td>
        <td>4</td>
        <td>-</td>
      </tr>
      <tr>
        <td v-for="move in strummingPattern.moves.split('')" :key="move">
          {{ move }}
        </td>
      </tr>
    </table>
  </div>

  <!-- two buttons, one for 'get harder', 'get easier' -->
  <p>Switch pattern?</p>
  <div class="card-actions">
    <button
      @click="getNewStrummingPattern(-1)"
      class="btn btn-sm btn-secondary"
    >
      go harder
    </button>
    <button @click="getNewStrummingPattern(1)" class="btn btn-sm btn-primary">
      go easier
    </button>
    <router-link to="/" class="btn btn-sm">stop session </router-link>
  </div>
</template>
