'use strict';
// A mouseover event that swaps the main gif on the site.

const helloKingen = document.querySelector('#gifContainer');

const image = document.querySelector('#gifContainer img');

helloKingen.addEventListener('mouseover', () => {
  image.src = 'media/dancing-king.gif';
  image.alt =
    'The Swedish king on the dancefloor. Dancing, shooting his chest out and back.';
});

helloKingen.addEventListener('mouseleave', () => {
  image.src = 'media/king-smirk.gif';
  image.alt = 'The Swedish king in a tuxedo, smirking and wobbling his head.';
});
