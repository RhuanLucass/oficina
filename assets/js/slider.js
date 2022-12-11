function addImages(objJson) {
  const carouselDynamic = document.getElementById("carousel");
  let append = "";
  let count = 0;
  objJson.forEach((element) => {
    if (count < 15) {
      append +=
        `
        <div data-js="carousel__item" class="carousel__item carousel__item--visible">
            <img src="` +
        element.substr(1) +
        `" />
        </div>
        `;
    }
    count++;
  });
  carouselDynamic.insertAdjacentHTML("afterbegin", append); //Inserindo antes do conteúdo da div
  addSlider();
}

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

  for (let i = 0; i < lengthImg; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.classList.add("ball");

    balls.appendChild(div);
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
