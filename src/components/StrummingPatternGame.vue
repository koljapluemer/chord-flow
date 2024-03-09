<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import StopButton from "./StopButton.vue";

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
  console.log("mounted");
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
  console.log("strummingPattern", strummingPattern.value);

  pickTwoRandomChords();
}

function pickTwoRandomChords() {
  const randomChords = easyChords.sort(() => Math.random() - 0.5).slice(0, 2);
  chordsToSwitchBetween.value = randomChords;
}

function getNewStrummingPattern(difficulty) {
  // assuming that if the user wants a harder one, this is easier, and vice-versa
  strummingPattern.value.difficulty =
    (strummingPattern.value.difficulty + difficulty) / 2;

  strummingPattern.value =
    strummingPatterns.value[
      Math.floor(Math.random() * strummingPatterns.value.length)
    ];
  localStorage.setItem("strummingPatterns", JSON.stringify(strummingPatterns.value));
}

start();
</script>

<template>
  <div>
    <div class="bg-white p-5">
      <p>Switch between:</p>

      <uke-chord
        :frets="chord.frets"
        :key="chord.name"
        v-for="chord in chordsToSwitchBetween"
        :name="chord.name"
      />
    </div>

    <p>
      using the strumming pattern: <b>{{ strummingPattern.name }}</b>
    </p>
    <!-- make a table -->
    <!-- first row 1-2-3-4- -->
    <!-- second row: the pattern -->
    <table class="table-auto table text-2xl my-8" :key="strummingPattern.name">
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

    <!-- two buttons, one for 'get harder', 'get easier' -->
    <div class="flex gap-4">
      <button
        @click="getNewStrummingPattern(-1)"
        class="bg-green-500 text-white p-2 rounded"
      >
        Get harder pattern
      </button>
      <button
        @click="getNewStrummingPattern(1)"
        class="bg-red-500 text-white p-2 rounded"
      >
        Get easier pattern
      </button>
    </div>
  </div>

  <StopButton />
</template>
