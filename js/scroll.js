'use strict';
// A scroll event that triggers a short audio sequence.

const scrollSong = ['../audio/daze-tamagotchi(beep).mp3'];

window.addEventListener('scroll', () => {
  const scrollAudio = new Audio();
  scrollAudio.src = scrollSong;

  scrollAudio.play();
});
