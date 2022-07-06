const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    boxTop < triggerBottom
      ? box.setAttribute("data-animate", true)
      : box.setAttribute("data-animate", false);
  });
}
