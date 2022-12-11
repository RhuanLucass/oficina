addSlider();
function addSlider() {
  const slides = document.querySelectorAll('[data-js="carousel__item"]');
  const nextButton = document.querySelector(
    '[data-js="carousel__button--next"]'
  );
  const prevButton = document.querySelector(
    '[data-js="carousel__button--prev"]'
  );
  const balls = document.querySelector(".renovated .balls");
  const lengthImg = document.querySelectorAll(
    ".renovated .carousel__item"
  ).length;
  const pos = document.querySelectorAll(".renovated .balls .ball");
  const lastSlideIndex = slides.length - 1;
  let myTimer,
    currentSlideIndex = (current = 0);

  function nextAuto() {
    myTimer = setInterval(() => {
      next();
    }, 3000);
  }
  nextAuto();

  manipulateSlidesClasses(currentSlideIndex);
  function manipulateSlidesClasses(currentSlideIndex) {
    slides.forEach((slide) =>
      slide.classList.remove("carousel__item--visible")
    );
    slides[currentSlideIndex].classList.add("carousel__item--visible");

    clearInterval(myTimer);
    nextAuto();
  }

  nextButton.addEventListener("click", next);
  function next() {
    currentSlideIndex === lastSlideIndex
      ? (currentSlideIndex = 0)
      : currentSlideIndex++;
    slide(currentSlideIndex);
  }

  prevButton.addEventListener("click", prev);
  function prev() {
    currentSlideIndex === 0
      ? (currentSlideIndex = lastSlideIndex)
      : currentSlideIndex--;
    slide(currentSlideIndex);
  }

  document.getElementById("0").classList.add("checked");
  pos.forEach((element) => element.addEventListener("click", clickBalls));

  function clickBalls() {
    const id = parseInt(this.id);
    current = id;
    slide(current);
  }

  function slide(current) {
    if (current >= lengthImg) current = 0;
    else if (current < 0) current = lengthImg - 1;

    document.querySelector(".checked").classList.remove("checked");
    manipulateSlidesClasses(current);
    document.getElementById(current).classList.add("checked");
  }
  slide(current);
}
