"use strict";

const rightBtnCarousel = document.querySelectorAll("button.carousel")[1],
       leftBtnCarousel = document.querySelectorAll("button.carousel")[0],
       listBtnCarousel = document.querySelectorAll("li.carousel button"),
           imgCarousel = document.querySelectorAll("img.carousel")[0],
           divCarousel = document.querySelector("div.carousel"),
        imgSrcCarousel = [
          "/before-night-falls.jpg",
          "/farewell-to-the-sea.jpg",
          "/singing-from-the-well.jpg",
          "/the-assault.jpg",
          "/the-color-of-summer.jpg"
        ],
        imgAltCarousel = [
          "Cover image of Before Night Falls book.",
          "Cover image of Farewell to the Sea book.",
          "Cover image of Singing from the Well book.",
          "Cover image of The Assault book.",
          "Cover image of The Color of Summer book.",
        ];

let counter = 0;

divCarousel.addEventListener("mouseover", () => {
  clearInterval(automateCarousel);
  btnCarouselTranslation();
});

divCarousel.addEventListener("mouseout", () => {
  clearInterval(automateCarousel);
  automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 5000);
  btnCarouselTranslation();
});

leftBtnCarousel.addEventListener("click", () => {
  imgCarouselTransition(() => {
    changeImg(0, -1, 4, -4);
  });
});

rightBtnCarousel.addEventListener("click", () => {
  imgCarouselTransition(() => {
    changeImg(4, 1, 0, 4);
  });
});

function btnCarouselTranslation() {
  leftBtnCarousel.classList.toggle("-translate-x-16");
  rightBtnCarousel.classList.toggle("translate-x-16");
};

function changeImg(limitNum, updateCounter, resetCounter, lastBtnIndex) {
  if (counter !== limitNum) {
    counter = counter + updateCounter;

    imgCarousel.src = imgSrcCarousel[counter];
    imgCarousel.alt = imgAltCarousel[counter];

    listBtnCarousel[counter].classList.add("opacity-100");
    listBtnCarousel[counter + -(updateCounter)].classList.remove("opacity-100");

  } else {
    counter = resetCounter;

    imgCarousel.src = imgSrcCarousel[counter];

    listBtnCarousel[counter].classList.add("opacity-100");
    listBtnCarousel[counter + lastBtnIndex].classList.remove("opacity-100");
  };
};

listBtnCarousel.forEach(btn => {
  btn.addEventListener("focus", () => { clearInterval(automateCarousel) });

  btn.addEventListener("blur", () => {
    clearInterval(automateCarousel);
    automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 5000);
  });

  btn.addEventListener("click", () => {
    listBtnCarousel[counter].classList.remove("opacity-100");
    imgCarousel.classList.add("opacity-25");

    setTimeout(() => {
      imgCarousel.src = imgSrcCarousel[btn.dataset.index];
      imgCarousel.alt = imgAltCarousel[btn.dataset.index];
      imgCarousel.classList.remove("opacity-25");
      counter = Number(btn.dataset.index);
      listBtnCarousel[counter].classList.add("opacity-100");
    }, 300);
  });
});

function imgCarouselTransition(changeImg){
  imgCarousel.classList.add("opacity-25");
  setTimeout(() => {
    changeImg();
    imgCarousel.classList.remove("opacity-25");
  }, 300);
};

let automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 5000);

// TO DO
  // Add useful comments.
