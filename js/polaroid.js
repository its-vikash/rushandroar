gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-polaroid",
      start: "top top",
      end: "top top",
      scrub: 0,
    },
  })
  .fromTo(
    "header .link-underline",
    {
      color: "#fff",
    },
    {
      color: "#A24520",
    },
    "<"
  )
  .fromTo(
    ".menu-mobile ,.item-menu path",
    {
      color: "#fff",
      fill: "#fff",
    },
    {
      color: "#A24520",
      fill: "#A24520",
    },
    "<"
  )
  .fromTo(
    "header .logo-svg",
    {
      // filter: "invert(0)",
    },
    {
      // filter: "brightness(26%) sepia(0) saturate(54) hue-rotate(173deg)",
    },
    "<"
  );

mm.add("(min-width: 1024px)", () => {
  gsap.from(".heading-polaroid", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });

  gsap.from(".card:nth-child(1)", {
    x: "160%",
    y: "10%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
      // markers: true,
    },
  });
  gsap.from(".card:nth-child(2)", {
    x: "160%",
    y: "0%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });

  gsap.from(".card:nth-child(3)", {
    x: "80%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });

  gsap.from(".card:nth-child(4)", {
    x: "-25%",
    y: "-4%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });
  gsap.from(".card:nth-child(5)", {
    x: "-25%",
    y: "4%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });

  gsap.from(".card:nth-child(6)", {
    x: "-90%",
    y: "-20%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });

  gsap.from(".card:nth-child(7)", {
    x: "-150%",
    y: "20%",
    rotationX: "0",
    rotationY: "0",
    rotationZ: "0deg",
    duration: 0.5,
    ease: "ease",
    scrollTrigger: {
      trigger: ".section-polaroid",
      scrub: false,
      start: "top top",
      end: "top top",
    },
  });
});