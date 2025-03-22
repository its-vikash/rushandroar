gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);

let mm = gsap.matchMedia(),
  breakPoints = {
    mobileMax: 767.98,
    mediumMin: 768,
    largeMin: 1024,
    extraLargeMin: 1280,
    xxlMin: 1536,
  };

const mediaConditions = {
  isMobile: `(max-width: ${breakPoints.mobileMax}px)`,
  isMedium: `(min-width: ${breakPoints.mediumMin}px) and (max-width: ${
    breakPoints.largeMin - 1
  }px)`,
  isLarge: `(min-width: ${breakPoints.largeMin}px) and (max-width: ${
    breakPoints.extraLargeMin - 1
  }px)`,
  isExtraLarge: `(min-width: ${breakPoints.extraLargeMin}px) and (max-width: ${
    breakPoints.xxlMin - 1
  }px)`,
  isXXL: `(min-width: ${breakPoints.xxlMin}px)`,
};

//--------- Scroll Smooth ---------//

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1500));
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const wrapCookie = document.querySelectorAll(".cky-preference-body-wrapper");

  wrapCookie.forEach((element) => {
    element.setAttribute("data-lenis-prevent", "");
    element.setAttribute("data-lenis-prevent-wheel", "");
    element.setAttribute("data-lenis-prevent-touch", "");
  });
});
