"use strict";

const primaryImgCarousel = document.querySelectorAll("img.carousel")[0],
        rightBtnCarousel = document.querySelectorAll("button.carousel")[1],
         leftBtnCarousel = document.querySelectorAll("button.carousel")[0],
         listBtnCarousel = document.querySelectorAll("li.carousel button"),
          imgSrcCarousel = [
            "/before-night-falls.jpg",
            "/farewell-to-the-sea.jpg",
            "/singing-from-the-well.jpg",
            "/the-assault.jpg",
            "/the-color-of-summer.jpg"
          ],
             divCarousel = document.querySelector("div.carousel");

let counter = 0;

divCarousel.addEventListener("mouseover", function() {
  leftBtnCarousel.classList.remove("-translate-x-16");
  rightBtnCarousel.classList.remove("translate-x-16");
})

divCarousel.addEventListener("mouseout", function() {
  leftBtnCarousel.classList.add("-translate-x-16");
  rightBtnCarousel.classList.add("translate-x-16");
})

leftBtnCarousel.addEventListener("click", function() {
  if (counter !== 0){
    counter--;
    primaryImgCarousel.src = imgSrcCarousel[counter];
    listBtnCarousel[counter + 1].classList.remove("opacity-100");
    listBtnCarousel[counter].classList.add("opacity-100");
  } else {
    counter = 4;
    primaryImgCarousel.src = imgSrcCarousel[counter];
    listBtnCarousel[counter - 4].classList.remove("opacity-100");
    listBtnCarousel[counter].classList.add("opacity-100");
  };
});

rightBtnCarousel.addEventListener("click", function() {
  if (counter !== 4){
    counter++;
    primaryImgCarousel.src = imgSrcCarousel[counter];
    listBtnCarousel[counter - 1].classList.remove("opacity-100");
    listBtnCarousel[counter].classList.add("opacity-100");
  } else {
    counter = 0; 
    primaryImgCarousel.src = imgSrcCarousel[counter];
    listBtnCarousel[counter + 4].classList.remove("opacity-100");
    listBtnCarousel[counter].classList.add("opacity-100");
  };
});



// TO DO
  // Refactor code to make it most effective and less repetitive.
