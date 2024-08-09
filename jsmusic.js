window.ConfettiGenerator = function(e) {
  // Your existing code here

  var audio = document.getElementById('background-music');

  function playMusic() {
    audio.play();
  }

  // Ensure you select the correct element for "Click Me!" button
  document.querySelector('.giftbox:after').addEventListener('click', playMusic);

  // Rest of your code here
};
