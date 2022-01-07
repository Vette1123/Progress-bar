const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let CurrentActive = 1;
next.addEventListener("click", () => {
  CurrentActive++;
  if (CurrentActive > circles.length) CurrentActive = circles.length;
  update();
});

prev.addEventListener("click", () => {
  CurrentActive--;
  if (CurrentActive < 1) CurrentActive = 1;
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < CurrentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const activs = document.querySelectorAll(".active");
  progress.style.width =
    ((activs.length - 1) / (circles.length - 1)) * 100 + "%";
  if (CurrentActive === 1) {
    prev.disabled = true;
  } else if (CurrentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
