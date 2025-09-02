'use strict';

// preloader

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", ()=>{
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


//header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll",function(){

    header.classList[window.screenY > 100 ? "add" : "remove"]("active1");
});

//slide effect on hero-content
const banner = document.querySelector(".banner-outline");
setTimeout(() => {
  banner.style.right=0;
}, 1500);
const side_content = document.querySelector(".hero-content");
setTimeout(() => {
  side_content.style.left=0;
}, 1500);

//slide effect
const slider_list = document.querySelector(".service-list");
window.addEventListener("scroll",()=>{
  console.log(slider_list)
  slider_list.classList.add("slider")
})


//element title effect
const tiltElements = document.querySelectorAll("[data-tilt]");  

//get tilt element center position
tiltElements.forEach((el) => {
  el.addEventListener("mousemove", function (event) {
    const centerX = el.offsetWidth / 2;
    const centerY = el.offsetHeight / 2;
    const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
    const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

    el.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${-tiltPosY}deg)`;
  });

  el.addEventListener("mouseout", function () {
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});


// tab content
const tabBtns = document.querySelectorAll("[data-tab-btn]");
console.log(tabBtns);
const tabContents = document.querySelectorAll("[data-tab-content]");
console.log(tabContents)

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {
  if (!(lastActiveTabBtn === this)) {
    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");
    this.classList.add("active");
    lastActiveTabBtn = this;
    console.log(this.dataset.tabBtn)
    const currentTableContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);
    currentTableContent.classList.add("active");
    console.log(currentTableContent.classList);
    lastActiveTabContent = currentTableContent;
    console.log(lastActiveTabContent)
  }
}

//function which applys the filtercontent to each element

function addEventOnElements(elements, eventType, callback) {
  elements.forEach(element => {
    element.addEventListener(eventType, callback);
  });
}
addEventOnElements(tabBtns, "click", filterContent);



// cursor


const cursors = document.querySelectorAll(" [data-cursor]");
const hoveredElements = [ ... document.querySelectorAll("button"),... document.querySelectorAll("a")];
window.addEventListener("mousemove", function (event) {
  const posX = event.clientX; 
  const posY= event.clientY;

  /** cursor dot position */ 
 
  cursors[0].style.left = `${posX}px`; 
  cursors[0].style.top = `${posY}px`;

  /** cursor outline1 position */ 
  setTimeout(function () {
    cursors [1].style.left = `${posX}px`; 
    cursors [1].style.top = `${posY}px`; 
  }, 35);

  /** cursor outline2 position */ 
  setTimeout(function () {
    cursors [2].style.left = `${posX}px`; 
    cursors [2].style.top = `${posY}px`; 
  }, 100);

});


/** add hovered class when mouseover on hoverElements */
addEventOnElements (hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) { 
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on
hoverElements */
addEventOnElements (hoveredElements, "mouseout",
function () {
  for (let i = 0, len = cursors.length; i < len; i++) { 
    cursors[i].classList.remove("hovered");
  }
});

