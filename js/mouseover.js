//addEventListener mouseover to change gifs to div nested within the main element.

let gifChanger = document.querySelector('div');

gifChanger.addEventListener('mouseover', () => {
  gifChanger.style.backgroundImage = `url('../media/kingen.gif')`;
});

gifChanger.addEventListener('mouseleave', () => {
  gifChanger.style.backgroundImage = `url('../media/knugen.gif')`;
});
