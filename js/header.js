// Menu
//==============================================================//
const btnMenu = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-mobile");

const toggleMenu = (status) => {
  const tlMenu = gsap.timeline();

  if (status === "open") {
    tlMenu
      .fromTo(
        ".menu-mobile",
        { maxHeight: 0 },
        { duration: 0.3, maxHeight: 100+"%", ease: "power4.out" }
      )
      .fromTo(
        ".item-menu",
        { x: 50, opacity: 0 },
        { duration: 1, opacity: 1, x: 0, stagger: 0.2, ease: "power4.out" },
        "<0.35"
      );

    menuMobile.classList.add("is-open");
    btnMenu.classList.add("is-active");
  }

  if (status === "close") {
    tlMenu
      .to(".menu-mobile", { duration: 0.3, maxHeight: 0, ease: "power4.out" })
      .to(
        ".item-menu",
        { duration: 0.5, opacity: 0, x: 50, stagger: 0.1, ease: "power4.out" },
        "-=0.2"
      );

    menuMobile.classList.remove("is-open");
    btnMenu.classList.remove("is-active");
  }
};
if (btnMenu) {
  btnMenu.addEventListener("click", () =>
    !btnMenu.classList.contains("is-active")
      ? toggleMenu("open")
      : toggleMenu("close")
  );
}

const menuLink = document.querySelectorAll(".menu-mobile .list-menu a");

menuLink.forEach((btn) => {
  btn.addEventListener("click", () => toggleMenu("close"));
});
