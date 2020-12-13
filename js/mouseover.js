//addEventListener mouseover to change gifs to div nested within the main element.

let gifChanger = document.getElementById('gifContainer');

gifChanger.addEventListener('mouseover', () => {
  gifChanger.style.backgroundImage = `url('../media/dancing-king.gif')`;
});

gifChanger.addEventListener('mouseleave', () => {
  gifChanger.style.backgroundImage = `url('../media/king-smirk.gif')`;
});
