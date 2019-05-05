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

// 3. onwheel
// Make starting header expand and contract
function zoom(event) {
  if (event.deltaY < 0) {
    scale *= event.deltaY * -1.25;
  }
  else {
    scale /= event.deltaY * 1.25;
  }
  scale = Math.min(Math.max(0.125, scale), 2);
  x.style.transform = `scale(${scale})`;

}
let scale = 1;
const x = document.querySelector('h1');
console.log(x);
document.onwheel = zoom;

// 4. drag / drop
// move buttons anywhere and have each take precendence when moved (go on top of everything else)
const dd = document.querySelector("body");
function reset(){
  buttons = doucment.querySelectorAll(".btn");
  for(i=0;i<buttons.length;i++){
    buttons[i].style.zIndex = 2;
  }
}
function start(e){
  divs = e.target;
  // divs.style.opacity = "0.2";
  xPos = e.offsetX === undefined ? e.layerX : e.offsetX;
  yPos = e.offsetY === undefined ? e.layerY : e.offsetY;
  divs.style.position = "absolute";
}
function over(e){
  e.preventDefault();
}
function drop(e){
  e.preventDefault();
  divs.style.left = e.pageX - xPos + "px";
  divs.style.top = e.pageY - yPos + "px";
}
dd.addEventListener("dragstart", start, false);
dd.addEventListener("dragover", over, false);
dd.addEventListener("drop", drop, false);

// 5. load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});
// above is an example of the load event, but  couldnt find much use for it, at least when considering making this website more fun
// I added a timer on the footer text with the click event, so if it is pressed, the text for most elements on the page changes
const easterEgg = document.querySelector("footer p");
const loadHeadings = document.querySelectorAll("h2");

easterEgg.addEventListener('click', function() {
  setTimeout(function() {
    loadHeadings[0].textContent = 'This';
  }, 500);
  setTimeout(function() {
    loadHeadings[1].textContent = 'Is';
  }, 1000);
  setTimeout(function() {
    loadHeadings[2].textContent = 'So';
  }, 1500);
  setTimeout(function() {
    loadHeadings[3].textContent = 'Crazy!';
  }, 2000);
});

// 6. focus
//targeting the anchor tags and have them change when someone clicks on them
let anchor = document.querySelectorAll('a');
console.log(anchor);
anchor.forEach(function(i) {
    i.addEventListener('focus', (event) => {
        event.target.fontSize = '50px';
        event.target.style.color = "hotpink";
      });
});

// 7. resize
//I created an effect to make the window shutter as you resize the page by changing the display properties of the page
window.addEventListener('resize', () => {
    console.log('resized');
    if (dd.style.display === "none") {
    dd.style.display = "block";
    } else {
    dd.style.display = "none";
    }
});

// 8. scroll
//same thing as last event listener but with scroll
window.addEventListener('scroll', () => {
  console.log("scrolled");
  if (dd.style.display === "none") {
  dd.style.display = "block";
  } else {
  dd.style.display = "none";
  }
});
// select
//added a text area below the header to give this a try; returned text and a black box when the text in the text area box is tampered withs
const select = document.querySelector("textarea");
console.log(select.textContent);
select.addEventListener("select", () =>{
  if (select.textContent !== "") {
    select.style.color = "white";
    select.style.backgroundColor = "black";
    select.textContent = "You can't get rid of me!";
  }
});

// dblclick
// added the same properties as mouse over has but with double click to the main text in the middle of the page
const dbl = document.getElementsByClassName("text-content");
console.log(dbl);
dbl[0].addEventListener("dblclick", function( event ) {
  event.target.style.color = "cyan";
  setTimeout(function() {
    event.target.style.color = "";
  }, 600);
}, false);
dbl[1].addEventListener("dblclick", function( event ) {
  event.target.style.color = "cyan";
  setTimeout(function() {
    event.target.style.color = "";
  }, 600);
}, false);
