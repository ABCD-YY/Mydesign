class Main {
  #observers = [];
  constructor() {
    this.hero = new HeroSlider('.swiper');
    this.#ScrollInit()
  }
  destroy() {
    this.#observers.forEach(so => so.destroy());
  }
  #ScrollInit() {
    this.#observers.push(
      new ScrollObserver('#main-content', this.#sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" }),
      new ScrollObserver('.swiper', this.#toggleSlideAnimation.bind(this), { once: false }),
      new ScrollObserver('.appear', this.#inviewAnimation),
      new ScrollObserver('.cover-slide', this.#inviewAnimation),
      new ScrollObserver('.tween-animate-title', this.#textAnimation)
    )
  }
  #sideAnimation(el, inview) {
    if (inview) {
      sides.forEach(side => side.classList.add('inview'));
    } else {
      sides.forEach(side => side.classList.remove('inview'));
    }
  }
  #toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    }
    else {
      this.hero.stop();
    }
  }
  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TextAnimation(el);
      ta.animate()
    }
  }
  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
    else {
      el.classList.remove('inview');
    }
  }
}
// const main = new Main;
const items = document.querySelectorAll(".main__item");
items.forEach(item => {
  item.addEventListener("click", function () {
    items.forEach(item => {
      item.classList.remove("active");
    })
    item.classList.add("active");
  });
});
const lists = document.querySelectorAll(".code__list");
const copyBtn = document.querySelector(".btn--green");
const xBtn = document.querySelector(".X-btn");
const code = document.querySelector(".code");
copyBtn.addEventListener("click", function () {
  code.classList.add('clicked');
  xBtn.classList.add('clicked');
})
xBtn.addEventListener("click", function () {
  code.classList.remove('clicked');
  xBtn.classList.remove('clicked');
})
let activeTab = 1;
const listsContainer = document.querySelector('.code__nav > ul');
const listsContent = document.querySelectorAll('.source-code');
listsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.code__list');
  if (!clicked) return;

  lists.forEach(t => t.classList.remove('active-icon'));
  listsContent.forEach(c => c.classList.remove('clicked'));

  clicked.classList.add('active-icon');
  activeTab = clicked.dataset.tab;
  document.querySelector(`.source-code--${clicked.dataset.tab}`)
    .classList.add('clicked');
});
const copyButton = document.querySelector('.code__copy');
copyButton.addEventListener('mouseleave', () => {
  setTimeout(() => {
    copyButton.setAttribute('aria-label', 'Copy Code');
  }, 500)
})
copyButton.addEventListener('click', () => {
  copyButton.setAttribute('aria-label', 'Copied');
  const copyTarget = document.querySelector(`.source-code--${activeTab} code`);
  const copyValue = copyTarget.textContent
  console.log(copyValue);
  copyToClipboard(copyValue)
});
function copyToClipboard(copyValue) {
  return navigator.clipboard.writeText(copyValue);
};