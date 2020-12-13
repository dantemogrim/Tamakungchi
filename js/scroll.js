// An event that triggers audio when the user scrolls the window.
const scrollSong = ['../audio/daze-tamagotchi(beep).mp3'];

window.addEventListener('scroll', () => {
  // Let's turn it into audio.
  const scrollAudio = new Audio();
  // Let's assign it to the actual song.
  scrollAudio.src = scrollSong;
  scrollAudio.play();
});
