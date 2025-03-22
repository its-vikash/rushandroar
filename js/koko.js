gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-koko",
      start: "top top",
      end: "top top",
      scrub: 0,
    },
  })
  .fromTo(
    "header .link-underline",
    {
      color: "#A24520",
    },
    {
      color: "#000",
    },
    "<"
  )
  .fromTo(
    ".menu-mobile ,.item-menu path",
    {
      color: "#A24520",
      fill: "#A24520",
    },
    {
      color: "#000",
      fill: "#000",
    },
    "<"
  )
  .fromTo(
    "header .logo-svg path",
    {
      fill: "#A24520",
    },
    {
      fill: "#000",
    },
    "<"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-koko",
      start: "top top",
      end: "center 0%",
      scrub: 1,
    },
  })
  .to(
    ".img-1",
    {
      y: -30,
      duration: 3,
    },
    "<"
  )
  .to(
    ".img-2",
    {
      y: 15,
      duration: 3,
    },
    "<"
  )
  .to(
    ".img-3",
    {
      y: -30,
      duration: 3,
    },
    "<"
  );
