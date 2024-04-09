const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    speed: 500,
    slidesPerView: 6,
  });
  class HeroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
    }
  
    _initSwiper() {
      return new Swiper(this.el, {
        loop: true,
        slidesPerView: 6,
        speed: 500,
      });
    }
  
    start(options = {}) {
      options = Object.assign({
        delay: 3000,
        disableOnInteraction: false
      }, options);
  
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
    stop() {
      this.swiper.autoplay.stop();
    }
  }