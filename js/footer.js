let bgFooterFrom =
  "radial-gradient(70% 30% at 50% 65%,rgba(175, 62, 12, 1) 0%,rgba(175, 62, 12, 1) 24%,rgba(175, 62, 12, 1) 54.5%,rgba(175, 62, 12, 1)72.5%,rgba(175, 62, 12, 0) 100%),rgba(175, 62, 12, 1)";

let bgFooterMobile =
  "radial-gradient(150% 50% at 50% 100%, rgba(175, 62, 12, 0.8) 0%, rgba(175, 62, 12, 0.68) 24%, rgba(175, 62, 12, 0.43) 54.5%, rgba(175, 62, 12, 0.21) 72.5%, rgba(175, 62, 12, 0) 100%), rgb(19, 42, 72)";

let bgFooterDesktop =
  "radial-gradient(70% 80% at 100% 100%, rgba(175, 62, 12, 0.8) 0%, rgba(175, 62, 12, 0.68) 24%, rgba(175, 62, 12, 0.43) 54.5%, rgba(175, 62, 12, 0.21) 72.5%, rgba(175, 62, 12, 0) 100%), rgb(19, 42, 72)";

// mm.add("(max-width: 1279.98px)", () => {
//   gsap.set("footer", {
//     background: bgFooterMobile,
//   });
// });

// mm.add("(min-width: 1280px)", () => {
mm.add(mediaConditions, (context) => {
  let { isMobile, isMedium, isLarge, isExtraLarge, isXXL } = context.conditions;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top center",
        end: "+=500",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      "footer",
      {
        duration: 2,
        background: bgFooterFrom,
      },
      {
        duration: 2,
        background: isMobile ? bgFooterMobile : bgFooterDesktop,
      },
      "<"
    );
});
// });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrap-feature-m",
      start: "top center",
      end: "+=500",
      scrub: 2,
      // markers: true,
    },
  });
  // .fromTo(
  //   ".wrap-feature-m",
  //   {
  //     duration: 2,
  //     background: bgFooterFrom,
  //   },
  //   {
  //     duration: 2,
  //     background: bgFooterDesktop,
  //   },
  //   "<"
  // );
gsap
  .timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top top",
      end: "top top",
      scrub: 0,
    },
  })
  .fromTo(
    "header .link-underline",
    {
      color: "#000",
    },
    {
      color: "#fff",
    },
    "<"
  )
  .fromTo(
    ".menu-mobile ,.item-menu path",
    {
      color: "#000",
      fill: "#000",
    },
    {
      color: "#fff",
      fill: "#fff",
    },
    "<"
  )
  .fromTo(
    "header .logo-svg path",
    {
      fill: "#000",
    },
    {
      fill: "#fff",
    },
    "<"
  );
