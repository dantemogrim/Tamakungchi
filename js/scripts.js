//addEventListener 'click' iteration to the 'feed' button.
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

//addEventListener 'click' iteration to the 'play' button.
const coolSongs = [
  '../audio/daze.mp3',
  '../audio/kungen-klubb.mp3',
  '../audio/vendela-galapalagutchi.mp3',
];

const audioElement = document.getElementById('music');

audioElement.addEventListener('click', () => {
  const coolSong = coolSongs[Math.floor(Math.random() * coolSongs.length)];
  audio.play(coolSong);
});

//addEventListener ... to the 'discipline' button
// const strippKlubb = [
//   '../audio/daze.mp3',
//   '../audio/kungen-klubb.mp3',
//   '../audio/vendela-galapalagutchi.mp3',
// ];

// const audioElement = document.getElementById('music');

// audioElement.addEventListener('click', () => {
//   const coolSong = coolSongs[Math.floor(Math.random() * coolSongs.length)];
//   audio.play(coolSong);
// });

// Får gärna vara två till och olika
