gsap.set("header", {
  yPercent: -150,
});

gsap.set("section", { autoAlpha: 1 });

// gsap.set("body", {
//   overflow: "hidden",
// });

gsap.set(".wrap-mobile-intro", {
  overflow: "hidden",
});

gsap.set(".menu-mobile , .item-menu path", {
  color: "#fff",
  fill: "#fff",
});
gsap.set("header .logo-svg path", {
  fill: "#fff",
});

let tl_intro = gsap.timeline({
  delay: 0.8,
  paused: true,
  onComplete: () => {
    gsap.set("body", {
      overflow: "visible",
    });
    gsap.to(".arrow-hero", {
      autoAlpha: 1,
      duration: 2,
      ease: "power4.out",
    });
  },
});

tl_intro
  .from(
    ".bg-main",
    {
      backgroundImage:
        "radial-gradient(150% 150% at 0% 0%,rgba(175, 62, 12, 0.8) 0%,rgba(175, 62, 12, 0.68) 24%,rgba(175, 62, 12, 0.43) 54.5%,rgba(175, 62, 12, 0.21) 72.5%,rgba(19, 42, 72, 0)  100%)",
      duration: 4,
      ease: "power4.out",
    },
    "<0.1"
  )
  .from(
    ".intro-img-3",
    {
      right: "-150%",
      bottom: "-100%",
      scale: "1.5",
      x: 100,
      duration: 2.5,
      ease: "power4.out",
    },
    "<0.15"
  )
  .from(
    ".intro-img-2",
    {
      right: "-200%",
      top: "-30%",
      scale: "1.5",
      x: 100,
      duration: 3,
      ease: "power4.out",
    },
    "<0.15"
  )
  .from(
    ".intro-img-1",
    {
      left: "-100%",
      top: "-30%",
      scale: "1.5",
      x: -100,
      duration: 2.5,
      ease: "power4.out",
    },
    "<0.15"
  )
  // .from(
  //   ".video-intro",
  //   {
  //     left: "-50%",
  //     bottom: "-30%",
  //     scale: "1.5",
  //     x: -100,
  //     duration: 3,
  //     ease: "power4.out",
  //   },
  //   "<0.15"
  // )
  .fromTo(
    ".intro-text g path",
    { y: 250, rotate: 3 },
    { duration: 1, y: 0, rotate: 0, stagger: 0.01, ease: "power2.out" },
    "<0.8"
  )
  .to(".intro-m", { autoAlpha: 1 }, "<0.8")
  .fromTo(
    "header",
    {
      yPercent: -150,
      duration: 1,
      ease: "power2.out",
    },
    {
      yPercent: 0,
      duration: 1,
      ease: "power2.out",
    },
    "<0.3"
  )
  .set(
    ".wrap-mobile-intro",
    {
      overflow: "visible",
    },
    "<1"
  );

window.addEventListener("load", (event) => {
  tl_intro.restart();
  gsap.set("header .link-underline", { color: "#fff" });
  gsap.set(".menu-mobile , .item-menu path", {
    color: "#fff",
    fill: "#fff",
  });
  gsap.set("header .logo-svg path", { fill: "#fff" });
});
