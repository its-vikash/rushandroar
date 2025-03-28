function scrollToTop() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
function duplicateContent(e) {
    document.querySelectorAll(e).forEach((e) => {
        e.innerHTML = `\n      <span>${e.textContent}</span>\n      <span>${e.textContent}</span>\n    `;
    });
}
const btnPins = document.querySelectorAll(".btn-pin");
btnPins.length > 0 &&
    btnPins.forEach((e) => {
        const t = e.querySelectorAll(".circle span");
        gsap.fromTo(t, 2, { scale: 0, opacity: 1 }, { scale: 1.2, opacity: 0, stagger: 0.6, repeat: -1, ease: "power1.out" });
    });
const gallerySection = document.querySelector("#gallery"),
    overlayImg = document.querySelectorAll(".overlay-img");
let clickedBtn = null,
    isOverlayActive = !1;
btnPins.length > 0 &&
    btnPins.forEach((e) => {
        const t = e.querySelector(".circle"),
            o = e.querySelector(".content");
        function n() {
            gsap.to(o, { display: "none", opacity: 0, duration: 0.5, ease: "power1.out" }), gsap.to(overlayImg, { autoAlpha: 0, duration: 0.5, ease: "power1.out" });
        }
        t.addEventListener("mouseenter", () => {
            gsap.to(clickedBtn, { zIndex: 9 }),
                gsap.to(e, { zIndex: 12 }),
                (clickedBtn = e),
                gsap.to(o, { display: "block", opacity: 1, duration: 0.5, ease: "power1.out" }),
                gsap.to(overlayImg, { autoAlpha: 1, duration: 0.5, delay: 0.25, ease: "power1.out" }),
                window.innerWidth <= 1279.98 && lenis.scrollTo("#gallery");
        }),
            overlayImg.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    n();
                });
            });
        const r = document.querySelectorAll(".swiper-button-prev"),
            s = document.querySelectorAll(".swiper-button-next");
        r.forEach((e) => {
            e.addEventListener("mouseenter", () => {
                n();
            });
        }),
            s.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    n();
                });
            }),
            window.innerWidth >= 1279.98 &&
                (t.addEventListener("mouseover", () => {
                    gsap.to(o, { display: "block", opacity: 1, duration: 0.5, ease: "power1.out" });
                }),
                t.addEventListener("mouseout", () => {
                    gsap.to(o, { display: "none", opacity: 0, duration: 0.5, ease: "power1.out" });
                }));
    });
const btnScales = document.querySelectorAll(".btn-scale"),
    whileTapScale = 1;
function getScrollHeight() {
    let e;
    return (e = window.innerWidth < 640 ? 1.1 * window.innerHeight : window.innerWidth >= 640 && window.innerWidth < 1024 ? 1.2 * window.innerHeight : 1 * window.innerHeight), e;
}
btnScales.forEach((e) => {
    const t = parseFloat(window.getComputedStyle(e).getPropertyValue("transform").split(",")[3]);
    function o() {
        gsap.to(this, { scale: 1, duration: 0.3, ease: "power1.out", boxShadow: "0px 3.609px 35.094px 0px rgba(0, 0, 0, 0.2)", transformOrigin: "bottom center" });
    }
    function n() {
        gsap.to(this, { scale: t, duration: 0.3, ease: "power1.out", boxShadow: "0px 3.609px 35.094px 0px rgba(0, 0, 0, 0.09)", transformOrigin: "bottom center" });
    }
    e.addEventListener("mousedown", o), e.addEventListener("mouseover", o), e.addEventListener("touchstart", o), e.addEventListener("touchend", n), e.addEventListener("mouseup", n), e.addEventListener("mouseout", n);
}),
    document.querySelectorAll("[data-animate-zoom] img").forEach((e) => {
        gsap.timeline({ scrollTrigger: { trigger: e, start: "0% 70%", end: "0% 0%", scrub: !1 } }).fromTo(
            e,
            { duration: 1.8, opacity: 0, y: 30, scale: 1.2, stagger: 0.1, ease: "power4.out" },
            { duration: 1.8, opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: "power4.out" }
        );
    }),
    document.querySelectorAll("[data-go-overview]").forEach((e) => {
        e.addEventListener("click", function (e) {
            e.preventDefault(),
                gsap.to(".arrow-hero", { opacity: 0 }),
                setTimeout(() => {
                    window.scrollTo({ top: getScrollHeight(), behavior: "smooth" });
                }, 200);
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        var e = [].slice.call(document.querySelectorAll("video.lazy"));
        if ("IntersectionObserver" in window) {
            var t = new IntersectionObserver(function (e, o) {
                e.forEach(function (e) {
                    if (e.isIntersecting) {
                        for (var o in e.target.children) {
                            var n = e.target.children[o];
                            "string" == typeof n.tagName && "SOURCE" === n.tagName && (n.src = n.dataset.src);
                        }
                        e.target.load(), e.target.classList.remove("lazy"), t.unobserve(e.target);
                    }
                });
            });
            e.forEach(function (e) {
                t.observe(e);
            });
        }
    }),
    (window.onscroll = function () {
        const e = document.getElementById("roto");
        e && (window.pageYOffset > 1 ? e.classList.add("active") : e.classList.remove("active"));
    }),
    document.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelectorAll(".counter-value");
        new IntersectionObserver(
            (t, o) => {
                t.forEach((t) => {
                    t.isIntersecting &&
                        (e.forEach((e) => {
                            const t = () => {
                                const o = +e.getAttribute("data-value"),
                                    n = +e.innerText,
                                    r = o / 500;
                                n < o ? ((e.innerText = Math.ceil(n + r)), setTimeout(t, 10)) : (e.innerText = o);
                            };
                            t();
                        }),
                        o.unobserve(t.target));
                });
            },
            { threshold: 0.5 }
        ).observe(document.querySelector("#counter-section"));
        const t = document.querySelector(".hamburger"),
            o = document.querySelector(".nav-menu"),
            n = document.querySelector("header");
        t.addEventListener("click", () => {
            t.classList.toggle("active"), o.classList.toggle("active"), n.classList.toggle("menu-open");
        }),
            document.addEventListener("click", (e) => {
                t.contains(e.target) || o.contains(e.target) || (t.classList.remove("active"), o.classList.remove("active"), n.classList.remove("menu-open"));
            }),
            window.addEventListener("resize", () => {
                window.innerWidth >= 1025 && (t.classList.remove("active"), o.classList.remove("active"), n.classList.remove("menu-open"));
            });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelector(".block-with-image"),
            t = e.parentElement,
            o = t.querySelector(".half-section-block:first-child");
        let n = e.offsetWidth;
        function r() {
            let r = t.getBoundingClientRect(),
                s = e.offsetHeight,
                i = r.left + window.scrollX,
                a = o.offsetWidth;
            r.top <= 120 && r.bottom >= s + 120
                ? ((e.style.position = "fixed"), (e.style.top = "120px"), (e.style.width = n + "px"), (e.style.left = i + a + 40 + "px"))
                : ((e.style.position = "relative"), (e.style.top = "auto"), (e.style.width = ""), (e.style.left = ""));
        }
        window.addEventListener("scroll", r),
            window.addEventListener("resize", function () {
                (n = e.offsetWidth), r();
            });
    });
