'use strict';
// A mouseover event that swaps the main gif on the site.

let gifChanger = document.getElementById('gifContainer');

gifChanger.addEventListener('mouseover', () => {
  gifChanger.style.backgroundImage = `url('../media/dancing-king.gif')`;
});

gifChanger.addEventListener('mouseleave', () => {
  gifChanger.style.backgroundImage = `url('../media/king-smirk.gif')`;
});
