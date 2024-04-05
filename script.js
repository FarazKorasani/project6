const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    box.classList.toggle("show", boxTop < triggerBottom);
  });
};

window.addEventListener("scroll", checkBoxes);

checkBoxes();
