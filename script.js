var menuButton = document.querySelector(".menuImg");
menuButton.addEventListener("click",function(){
  document.querySelector(".links").classList.add('openMenu');
  document.querySelector(".links img").classList.add('showExitButton');
  document.querySelector("ul").classList.add('showOptions');
});

var closeButton = document.querySelector(".links img");

closeButton.addEventListener("click",function(){
  document.querySelector(".links").classList.remove('openMenu');
  document.querySelector(".links img").classList.remove('showExitButton');
  document.querySelector("ul").classList.remove('showOptions');
});