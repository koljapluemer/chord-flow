<script setup>
// import words from "./words.js";
import sentences from "./new_sentences.js";
import { ref, computed } from "vue";
import * as ebisu from "ebisu-js";

const lessons = [
  ["C", "G", "Am", "F"],
  ["Dm", "G", "C", "Am"],
  ["G", "Em", "C", "D"],
  ["F", "Am", "Dm", "G"],
  ["A", "E", "F#m", "D"],
  ["G", "D", "Em", "C"],
  ["C", "Am", "F", "G"],
  ["D", "A", "Bm", "G"],
  ["A", "F#m", "D", "E"],
  ["Am", "G", "C", "E"],
  ["F", "C", "Dm", "Bb"],
  ["E", "B", "C#m", "A"],
  ["Bm", "G", "D", "A"],
  ["C", "G", "F", "Dm"],
  ["G", "C", "Em", "D"],
  ["D", "Bm", "G", "A"],
  ["A", "E", "C#m", "F#m"],
  ["F#m", "D", "A", "E"],
  ["Bb", "F", "Gm", "Eb"],
  ["Em", "C", "G", "D"],
  ["Am", "Dm", "G", "E"],
  ["C", "G", "Bb", "F"],
  ["Gm", "D", "Bb", "F"],
  ["F#m", "B", "E", "C#m"],
  ["D", "A", "G", "Bm"],
  ["Bm", "F#m", "G", "D"],
  ["C", "E", "Am", "G"],
  ["G", "C", "D", "Bm"],
  ["A", "D", "C#m", "Bm"],
  ["F", "Bb", "Dm", "Gm"],
  ["B", "G#m", "E", "C#m"],
  ["Eb", "Bb", "Fm", "Ab"],
  ["Am", "G", "F", "E"],
  ["D", "G", "Bm", "Em"],
  ["C", "Am", "G", "F"],
  ["G", "D", "C", "Bm"],
];

const currentLessonIndex = ref(0);
const generatedExercisesInLesson = ref([]);
const currentExerciseIndex = ref(0);

function getRandomLesson() {
  // generate the following exercises based on the lesson:
  // chord pairs, but only the ones following on each other: so index 0 with 1, 1 with 2, 2 with 3, 3 with 0
  // do the same thing for triplets, and also add the whole quartet once
  currentLessonIndex.value =
    lessons[Math.floor(Math.random() * lessons.length)];
  generatedExercisesInLesson.value = [];
  for (let i = 0; i < currentLessonIndex.value.length; i++) {
    const chord = currentLessonIndex.value[i];
    const nextChord =
      currentLessonIndex.value[(i + 1) % currentLessonIndex.value.length];
    const nextNextChord =
      currentLessonIndex.value[(i + 2) % currentLessonIndex.value.length];
    const nextNextNextChord =
      currentLessonIndex.value[(i + 3) % currentLessonIndex.value.length];
    generatedExercisesInLesson.value.push([chord, nextChord]);
    generatedExercisesInLesson.value.push([chord, nextChord, nextNextChord]);
    generatedExercisesInLesson.value.push([
      chord,
      nextChord,
      nextNextChord,
      nextNextNextChord,
    ]);
  }
  console.log(generatedExercisesInLesson.value);
  currentExerciseIndex.value = 0;
}

getRandomLesson();

function setNextExerciseInLesson() {
  if (currentExerciseIndex.value >= generatedExercisesInLesson.value.length) {
    getRandomLesson();
  }
  currentExerciseIndex.value++;
  return exercise;
}

// computed value for actual exercise
const exercise = computed(() => {
  return generatedExercisesInLesson.value[currentExerciseIndex.value];
});


// next exercise should picked every 10 seconds
setInterval(() => {
  setNextExerciseInLesson();
}, 10000);

</script>

<template>
  <div
    class="card bg-gray-600 shadow-xl m-4 flex flex-col items-center w-full max-w-screen-xl"
  >
    <div class="card-body">
      <h2 class="card-title my-2 text-2xl">
        <span class="m-2" v-for="chord in exercise">
          {{ chord }}
        </span>
      </h2>
    </div>
  </div>
  <br />
</template>

<style scoped></style>
