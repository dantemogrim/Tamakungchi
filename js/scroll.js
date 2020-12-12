//KEYPRESS IS OUTDATED ACCORDING TO MOZILLA
//TRY KEYDOWN OR KEYUP OR SMTH ELSE INSTEAD
//PERHAPS TRY AND MAKE A 'RESET' THAT GOES BEEP BEEP
//SCROLL BEEP BEEP!!!!!!!

let resetBtn = window.addEventListener('keypress', function (event) {
  console.log("You've pressed the key:", event.key);
});
