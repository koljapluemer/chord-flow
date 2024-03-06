<script setup>
import { ref } from "vue";
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

const strummingPatterns = [{ moves: "↓-↓↑-↑↓↑" }];

const chordsToSwitchBetween = ref([]);

function pickTwoRandomChords() {
  const randomChords = easyChords.sort(() => Math.random() - 0.5).slice(0, 2);
  chordsToSwitchBetween.value = randomChords;
}

const strummingPattern = ref(strummingPatterns[0]);

pickTwoRandomChords();
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

    <p>using the strumming pattern:</p>
    <!-- make a table -->
    <!-- first row 1-2-3-4- -->
    <!-- second row: the pattern -->
    <table class="table-auto table text-2xl my-8">
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

  <StopButton />
</template>
