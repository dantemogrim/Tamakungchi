/* Is it possible to loop these out in my feedButton click Event? */

const quotes = [
  'Tack för maten, sa soldaten, jag vill inte diska faten.',
  'Det kommer inga stekta sparvar flygande om du inte själv bemödar dig om att göra ditt bästa',
  'Ämnet för dagens varmrätt är brännskador.',
  'Härmed förklarar jag den nya potatisgratängen invigd som ska ätas här mellan.. eh.. tuggorna.',
  'Vad är det här för rätt? Små-Tarzans med Allan-syndrom?',
];

/* Feed button with window alert event. */
const feedButton = document.getElementById('feed');

feedButton.addEventListener('click', () => {
  window.alert('Tack för maten, sa soldaten, jag vill inte diska faten!');
});

/* Play button with play audio event. */

let tamagotchiSong = document.getElementById('music');
function play() {
  tamagotchiSong.play();
}
