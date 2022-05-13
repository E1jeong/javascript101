const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const targetRect = target.getBoundingClientRect();
const targetWidth = targetRect.width / 2;
const targetHeight = targetRect.height / 2;

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x} ${y}`);

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetWidth}px, ${
    y - targetHeight
  }px)`;
  tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
  // vertical.style.left = `${x}px`;
  // horizontal.style.top = `${y}px`;
});
