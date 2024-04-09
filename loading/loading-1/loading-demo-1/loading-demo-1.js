const startValue = 0;
const endValue = 100;
const duration = 1000;
function countUp(timestamp, startTimestamp, counterElement) {
    const progress = timestamp - startTimestamp;
    const currentValue = Math.min(Math.floor((progress / duration) * (endValue - startValue) + startValue), endValue);
    counterElement.textContent = currentValue;
    if (progress < duration) {
        requestAnimationFrame((nextTimestamp) => countUp(nextTimestamp, startTimestamp, counterElement));
    }
}
window.addEventListener("load", () => {
    const counterElement = document.querySelector(".counter");
    const startTimestamp = performance.now();
    requestAnimationFrame((timestamp) => countUp(timestamp, startTimestamp, counterElement));
});