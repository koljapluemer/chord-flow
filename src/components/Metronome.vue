<!-- adapted from https://stackoverflow.com/questions/62512755/accurately-timing-sounds-in-browser-for-a-metronome -->
<!-- worked kind of, but currently does not -->
<script setup>
import { ref, computed } from "vue";

function noteDurationToMs(bpm, dur, type) {
  return (60000 * 4 * dur * type) / bpm;
}

function scheduleNote(ac, time, dur) {
  var osc = ac.createOscillator();
  osc.connect(ac.destination);
  osc.start(time);
  osc.stop(time + dur);
}

const ac = new AudioContext();
let lastNote = ac.currentTime;
const step = noteDurationToMs(120, 1 / 4, 1) / 1000;
const lookAhead = step / 2;

let id,
  timer = () => {
    const diff = ac.currentTime - lastNote;
    if (diff >= lookAhead) {
      const nextNote = lastNote + step;
      scheduleNote(ac, nextNote, 0.025);
      lastNote = nextNote;
    }
  };

function start() {
  ac.resume;
  id = setInterval(timer, 25);
}

function stop() {
  clearInterval(id);
//   ac.suspend;
}
</script>

<template>
  <div class="my-2">
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
  </div>
</template>
