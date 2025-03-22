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
