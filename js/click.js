// addEventListener 'click' iteration to the 'feed' button.
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

// addEventListener 'click' iteration when 'play' button is clicked.
const coolSongs = [
  '../audio/daze-tamagotchi.mp3',
  '../audio/daze-tamagotchi(beep).mp3',
  '../audio/daze-tamagotchi(high).mp3',
  '../audio/daze-tamagotchi(low).mp3',
  '../audio/daze-tamagotchi(very_low).mp3',
  '../audio/vendela-gala_pala_gutchi.mp3',
];

// Grabbing the button element.
const playBtn = document.getElementById('play');

//Assigning addEventListener 'click' event to the button element.
playBtn.addEventListener('click', () => {
  // Randomizes the songs and assigns it to a variable.
  const oneSong = coolSongs[Math.floor(Math.random() * coolSongs.length)];

  // Creating Audio file and assigning it to a variable.
  const tamagotchiSong = new Audio();

  // Assigning the path to the song.
  tamagotchiSong.src = oneSong;

  // Let's play it.
  tamagotchiSong.play();
});

// Moving on to the 'discipline' button and getting it to do the same thing.
const disciplineSounds = [
  '../audio/kungen-klubb.mp3',
  '../audio/kungen-liten_katt.mp3',
  '../audio/kungen-nee.mp3',
  '../audio/kungen-nee_short.mp3',
  '../audio/kungen-faktiskt_inte.mp3',
  '../audio/kungen-faktiskt_slow.mp3',
];

// addEventListener 'click' when 'Discipline' button is clicked.
const disciplineBtn = document.getElementById('discipline');

//Assigning addEventListener 'click' event to the button element.
disciplineBtn.addEventListener('click', () => {
  // Randomizes the songs and assigns it to a variable.
  const oneDisciplineAudio =
    disciplineSounds[Math.floor(Math.random() * disciplineSounds.length)];

  // Creating Audio file and assigning it to a variable.
  const disciplinaryAudio = new Audio();

  // Assigning the path to the song.
  disciplinaryAudio.src = oneDisciplineAudio;

  // Let's play it.
  disciplinaryAudio.play();
});
