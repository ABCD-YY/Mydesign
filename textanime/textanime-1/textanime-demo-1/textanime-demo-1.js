document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
});
class TextAnimation {
    constructor(els) {
        this.DOM = {};
        this.DOM.els = document.querySelectorAll(els);
        this.DOM.els.forEach(el => {
            const chars = el.innerHTML.trim().split("");
            el.innerHTML = this._splitText(chars);
        });
    }
    _splitText(chars) {
        return chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.els.forEach(el => {
            el.classList.toggle('inview');
        });
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(els) {
        super(els);
        this.DOM.chars = [];
        this.DOM.els.forEach(el => {
            const chars = el.querySelectorAll('.char');
            this.DOM.chars.push(chars);
        });
    }
    animate() {
        this.DOM.els.forEach((el, index) => {
            el.classList.add('inview');
            this.DOM.chars[index].forEach((c, i) => {
                TweenMax.to(c, .6, {
                    ease: Back.easeOut,
                    delay: i * .05,
                    startAt: { y: '-50%', opacity: 0},
                    y: '0%',
                    opacity: 1
                });
            });
        });
    }
}