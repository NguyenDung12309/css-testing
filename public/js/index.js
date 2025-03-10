document.addEventListener("DOMContentLoaded", () => {
  //header
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("active"); 

    } else {
      header.classList.remove("active");
    }
  });

  //banner
  new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //video handler
  const videoEntertainment = document.getElementById("entertainment__video");

  videoHandler(videoEntertainment);

  function videoHandler(video) {
    const playPauseBtn = document.getElementById("play-pause-btn");
    const playBtnIcon = playPauseBtn.querySelector("img");

    playPauseBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playBtnIcon.src = "../public/icons/pause.svg";
      } else {
        video.pause();
        playBtnIcon.src = "../public/icons/play.svg";
      }
    });
  }

  //accordion
  const attractionDetail = document.getElementById("attraction__detail");
  const attractionDetailImg = attractionDetail.querySelector("img");
  const attractionDetailLink = attractionDetail.querySelector("a");
  const accordionItems = document.querySelectorAll(".accordion-item");
  let defaultActiveItem = document.querySelector(".accordion-item.active");

  if (!defaultActiveItem && accordionItems.length > 0) {
    defaultActiveItem = accordionItems[0];
    defaultActiveItem.classList.add("active");
  }

  if (defaultActiveItem) {
    attractionDetailImg.src = defaultActiveItem.dataset.img_path;
    attractionDetailLink.href = defaultActiveItem.dataset.link;
    attractionDetailImg.alt = defaultActiveItem.dataset.img_alt;
    attractionDetailLink.classList.add("opacity-100");
  }
  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      accordionItems.forEach((el) => {
        el.classList.remove("active");
      });

      item.classList.add("active");

      let imgPath = item.dataset.img_path;
      let link = item.dataset.link;
      let imgAlt = item.dataset.img_alt;
      
      attractionDetailLink.classList.remove("opacity-100");
      attractionDetailLink.classList.add("opacity-0");

      setTimeout(() => {
        attractionDetailImg.src = imgPath;
        attractionDetailLink.href = link;
        attractionDetailImg.alt = imgAlt;

        attractionDetailLink.classList.remove("opacity-0");
        attractionDetailLink.classList.add("opacity-100");
      }, 300);
    });
  });

  //back to top
  const backToTopBtn = document.getElementById("back-to-top");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
});
