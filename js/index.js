/*jshint esversion: 6 */

// Your code goes here
// 1. mouseover
// nav items
const mouse = document.querySelector(".nav");
console.log(mouse);
mouse.addEventListener("mouseover", function( event ) {
  event.target.style.color = "cyan";
  setTimeout(function() {
    event.target.style.color = "";
  }, 600);
}, false);

// 2. keydown
//body
const bg = document.querySelector('body');
console.log(bg);
const ex1 = document.addEventListener("keydown", event => {
  if (event.key === "q" || event.key === "a" || event.key === "z"){
      bg.style.color = "red";
      bg.style.backgroundColor = "yellow";
  } else if
    (event.key === "w" || event.key === "s" || event.key === "x"){
      bg.style.color = "yellow";
      bg.style.backgroundColor = "green";
  } else if
    (event.key === "e" || event.key === "d" || event.key === "c"){
      bg.style.color = "green";
      bg.style.backgroundColor = "purple";
  } else if
    (event.key === "r" || event.key === "f" || event.key === "v"){
      bg.style.color = "purple";
      bg.style.backgroundColor = "cyan";
  } else if
    (event.key === "t" || event.key === "g" || event.key === "v"){
      bg.style.color = "cyan";
      bg.style.backgroundColor = "orange";
  } else if
    (event.key === "y" || event.key === "h" || event.key === "n"){
      bg.style.color = "orange";
      bg.style.backgroundColor = "brown";
    } else if
    (event.key === "u" || event.key === "j" || event.key === "m"){
      bg.style.color = "brown";
      bg.style.backgroundColor = "pink";
    } else if
    (event.key === "i" || event.key === "k"){
      bg.style.color = "pink";
      bg.style.backgroundColor = "chartreuse";
    } else if
    (event.key === "o" || event.key === "l" || event.key === "p"){
      bg.style.color = "chartreuse";
      bg.style.backgroundColor = "black";
    }
});
//header
const bg2 = document.querySelector('header');
console.log(bg2);
const ex2 = document.addEventListener("keydown", event => {
  if (event.key === "q" || event.key === "a" || event.key === "z"){
      bg2.style.color = "red";
      bg2.style.backgroundColor = "yellow";
  } else if
    (event.key === "w" || event.key === "s" || event.key === "x"){
      bg2.style.color = "yellow";
      bg2.style.backgroundColor = "green";
  } else if
    (event.key === "e" || event.key === "d" || event.key === "c"){
      bg2.style.color = "green";
      bg2.style.backgroundColor = "purple";
  } else if
    (event.key === "r" || event.key === "f" || event.key === "v"){
      bg2.style.color = "purple";
      bg2.style.backgroundColor = "cyan";
  } else if
    (event.key === "t" || event.key === "g" || event.key === "v"){
      bg2.style.color = "cyan";
      bg2.style.backgroundColor = "orange";
  } else if
    (event.key === "y" || event.key === "h" || event.key === "n"){
      bg2.style.color = "orange";
      bg2.style.backgroundColor = "brown";
    } else if
    (event.key === "u" || event.key === "j" || event.key === "m"){
      bg2.style.color = "brown";
      bg2.style.backgroundColor = "pink";
    } else if
    (event.key === "i" || event.key === "k"){
      bg2.style.color = "pink";
      bg2.style.backgroundColor = "chartreuse";
    } else if
    (event.key === "o" || event.key === "l" || event.key === "p"){
      bg2.style.color = "chartreuse";
      bg2.style.backgroundColor = "black";
    }
});








// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick
