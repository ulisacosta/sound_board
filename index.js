const trumpetsButton = document.getElementById("trumpetsButton");
const monkeyButton = document.getElementById("monkeyButton");
const laughButton = document.getElementById("laughButton");
const victoryButton = document.getElementById("victoryButton");
const drumsButton = document.getElementById("drumsButton");



trumpetsButton.addEventListener("click", () => {
  trumpetsMp3.play();
  monkeyMp3.pause();
laughMp3.pause();
victoryMp3.pause();
drumsMp3.pause();

});

monkeyButton.addEventListener("click", () => {
  monkeyMp3.play();
  trumpetsMp3.pause();
  laughMp3.pause();
  victoryMp3.pause();
  drumsMp3.pause();
  
});

laughButton.addEventListener("click", () => {
  laughMp3.play();
  trumpetsMp3.pause();
  monkeyMp3.pause();
  victoryMp3.pause();
  drumsMp3.pause();
  
});

victoryButton.addEventListener("click", () => {
  victoryMp3.play();
  trumpetsMp3.pause();
  monkeyMp3.pause();
  laughMp3.pause();
  drumsMp3.pause();
  
});

drumsButton.addEventListener("click", () => {
  drumsMp3.play();
  trumpetsMp3.pause();
  laughMp3.pause();
  victoryMp3.pause();
  monkeyMp3.pause();
  
});


