/* Click */
const button = document.querySelector('button');

button.addEventListener('click', () => {
  window.alert('Tack för maten, sa soldaten, jag vill inte diska faten!');
});

document.getElementById('feed').addEventListener(
  'click',
  function () {
    click1(1);
  },
  false
);
// document.getElementById('feed').innerHTML = 'Om-nom!';

/* Can I loop out different prompt messages?
Should I be giving the buttons class names to make the queries easier?*/

/*Keypress*/

// window.addEventListener('keypress', function (event) {
//   console.log("You've pressed the key:", event.key);
// });

/* Scroll */

// window.addEventListener('scroll', function (e) {
//   console.log('log scroll from top:', window.scrollY);
// });
