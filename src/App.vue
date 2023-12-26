<script setup>
import { ref, computed } from "vue";

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
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[0], currentLessonIndex.value[1]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[1], currentLessonIndex.value[2]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[2], currentLessonIndex.value[3]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[3], currentLessonIndex.value[0]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[0], currentLessonIndex.value[1], currentLessonIndex.value[2]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[1], currentLessonIndex.value[2], currentLessonIndex.value[3]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[2], currentLessonIndex.value[3], currentLessonIndex.value[0]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[3], currentLessonIndex.value[0], currentLessonIndex.value[1]],
  );
  generatedExercisesInLesson.value.push(
     [currentLessonIndex.value[0], currentLessonIndex.value[1], currentLessonIndex.value[2], currentLessonIndex.value[3]],
  );
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
  <main class="flex gap-2 mb-10">
    <div class="card bg-gray-100 shadow-xl m-4" v-for="chord in exercise">
      <div class="card-body text-gray-800">
        <!-- dynamically load @assets/chords/{chord}.png -->
        <img :src="`/chords/${chord}.png`" class="w-24" />
      </div>
    </div>
  </main>
  <em
    >don't forget the
    <a href="https://www.metronomeonline.com/" class="underline" target="_blank"> metronome</a>
  </em>
</template>

<style scoped></style>
