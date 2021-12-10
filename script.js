let headerNavEl = document.querySelector(".header__nav");
let headerEl = document.querySelector(".header");
let headerText = document.querySelectorAll(".header__nav__links");
let logoEl = document.querySelector(".logo");

/*toggles style for header readability*/
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    for (let i = 0; i < headerText.length; i++) {
      headerText[i].classList.add("small");
    }
    headerEl.classList.add("small");
    headerNavEl.classList.add("small");
    logoEl.classList.add("small");
  } else {
    for (let i = 0; i < headerText.length; i++) {
      headerText[i].classList.remove("small");
    }
    headerEl.classList.remove("small");
    headerNavEl.classList.remove("small");
    logoEl.classList.remove("small");
  }
};

/*Have added smooth scrolling in "html" element in css source*/
const scrollToTop = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // window.scroll({
    //   top: 0,
    //   behavior: "smooth",
    // });
  }
};

const scrollToSection = (id) => {
  let elementToScroll = document.querySelector(`.${id}`).nextElementSibling;
  elementToScroll.scrollIntoView();
};
