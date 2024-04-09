var header = document.querySelector(".header");
let height = 10;
function css() {
  const a = "height: " + height + "rem;"
  header.setAttribute("style", a);
  updateScrollY();
  console.log(height);
}
function updateScrollY() {
  currentScrollY = window.scrollY;
  if(currentScrollY >= 400) {
    height = currentScrollY / 40;
  }
  console.log("Current Scroll Y:", currentScrollY);
}
window.addEventListener("scroll", css);