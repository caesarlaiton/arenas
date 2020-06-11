"use strict";

const rightBtnCarousel = document.querySelectorAll("button.carousel")[1],
       leftBtnCarousel = document.querySelectorAll("button.carousel")[0],
       listBtnCarousel = document.querySelectorAll("li.carousel button"),
        anchorCarousel = document.querySelector("a.carousel"),
           imgCarousel = document.querySelectorAll("img.carousel")[0],
           divCarousel = document.querySelector("div.carousel"),
        anchorHrefCarousel = [
          "https://www.amazon.com/Before-Night-Falls-Reinaldo-Arenas/dp/0140157654",
          "https://www.amazon.com/Farewell-Sea-Novel-Cuba-Pentagonia/dp/0140066365",
          "https://www.amazon.com/Singing-Well-Pentagonia-Reinaldo-Arenas/dp/014009444X",
          "https://www.amazon.com/Assault-Novel-Pentagonia-Reinaldo-Arenas/dp/0140157182",
          "https://www.amazon.com/Color-Summer-Earthly-Delights-Pentagonia/dp/0140157190"
        ],
        imgSrcCarousel = [
          "https://caesarlaiton.github.io/arenas/before-night-falls.jpg",
          "https://caesarlaiton.github.io/arenas/farewell-to-the-sea.jpg",
          "https://caesarlaiton.github.io/arenas/singing-from-the-well.jpg",
          "https://caesarlaiton.github.io/arenas/the-assault.jpg",
          "https://caesarlaiton.github.io/arenas/the-color-of-summer.jpg"
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
  automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 10000);
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

    anchorCarousel.href = anchorHrefCarousel[counter];
    imgCarousel.src = imgSrcCarousel[counter];
    imgCarousel.alt = imgAltCarousel[counter];

    listBtnCarousel[counter].classList.add("opacity-100");
    listBtnCarousel[counter + -(updateCounter)].classList.remove("opacity-100");

  } else {
    counter = resetCounter;

    anchorCarousel.href = anchorHrefCarousel[counter];
    imgCarousel.src = imgSrcCarousel[counter];
    imgCarousel.alt = imgAltCarousel[counter];

    listBtnCarousel[counter].classList.add("opacity-100");
    listBtnCarousel[counter + lastBtnIndex].classList.remove("opacity-100");
  };
};

listBtnCarousel.forEach(btn => {
  btn.addEventListener("focus", () => { clearInterval(automateCarousel) });

  btn.addEventListener("blur", () => {
    clearInterval(automateCarousel);
    automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 10000);
  });

  btn.addEventListener("click", () => {
    listBtnCarousel[counter].classList.remove("opacity-100");
    imgCarousel.classList.add("opacity-25");

    setTimeout(() => {
      anchorCarousel.href = anchorHrefCarousel[btn.dataset.index];
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

let automateCarousel = setInterval(() => { rightBtnCarousel.click() }, 10000);

// TO DO
  // Add useful comments.
