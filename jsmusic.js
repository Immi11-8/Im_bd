document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('background-music');
  var giftboxButton = document.querySelector('.giftbox');

  function playMusic() {
    audio.play();
  }

  if (giftboxButton) {
    giftboxButton.addEventListener('click', playMusic);
  }
});
