'use strict';
/* This is the JavaScript applied to the three buttons on the website.
They work similarly except they all have different contents.
First runner upp is an addEventListener 'click' iteration to the 'feed' button. */
const quotes = [
  '👑"Tack för maten, sa soldaten, jag vill inte diska faten."👑',
  '🤴"Det kommer inga stekta sparvar flygande om du inte själv bemödar dig om att göra ditt bästa."🤴',
  '👑"Ämnet för dagens varmrätt är brännskador."👑',
  '🤴"Härmed förklarar jag den nya potatisgratängen invigd som ska ätas här mellan.. eh.. tuggorna."🤴',
  '👑"Vad är det här för rätt? Små-Tarzans med Allan-syndrom?"👑',
];

const feedButton = document.getElementById('feed');

feedButton.addEventListener('click', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  window.alert(quote);
});

// A click event that fires off a random song from an array whenever the 'play' button is pressed.
let coolSongs = [
  '../audio/daze-tamagotchi.mp3',
  '../audio/daze-tamagotchi(high).mp3',
  '../audio/daze-tamagotchi(low).mp3',
  '../audio/daze-tamagotchi(very_low).mp3',
  '../audio/vendela-gala_pala_gutchi.mp3',
];

// Grabbing the button element.
const playBtn = document.getElementById('play');

// Assigning 'click' to the button element.
playBtn.addEventListener('click', () => {
  // Randomizes the songs and assigns it to a variable.
  const oneSong = coolSongs[Math.floor(Math.random() * coolSongs.length)];

  // Creating Audio file and assigning it to a variable.
  const tamagotchiSong = new Audio();

  // Assigning the path to the song.
  tamagotchiSong.src = oneSong;

  // Let's play the song.
  tamagotchiSong.play();
});

// Moving on to the array meant for the 'discipline' button.
const disciplineSounds = [
  '../audio/kungen-klubb.mp3',
  '../audio/kungen-liten_katt.mp3',
  '../audio/kungen-nee.mp3',
  '../audio/kungen-nee_short.mp3',
  '../audio/kungen-faktiskt_inte.mp3',
  '../audio/kungen-faktiskt_slow.mp3',
];

// Same execution applied here as with the previous 'play' button.
const disciplineBtn = document.getElementById('discipline');
disciplineBtn.addEventListener('click', () => {
  const oneDisciplineAudio =
    disciplineSounds[Math.floor(Math.random() * disciplineSounds.length)];
  const disciplinaryAudio = new Audio();
  disciplinaryAudio.src = oneDisciplineAudio;
  disciplinaryAudio.play();
});
