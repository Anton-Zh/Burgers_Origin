// // overlay

const openButtons = document.querySelectorAll(".btn--black"),
  reviewsSection = document.querySelector('#reviews');


for (let i = 0; i < openButtons.length; i++) {
  const element = openButtons[i];

  element.addEventListener("click", function () {
    const elements = element.parentNode.children;
    let name, 
        text;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.classList.contains('reviews__title')) {
        name = element.textContent
      };
      if (element.classList.contains('reviews__text')) {
        text = element.textContent
      };

    }

    reviewsSection.appendChild(createOverlay(name, text));
  });
};

function createOverlay(name, text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#reviewTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__close");
  closeElement.addEventListener("click", function () {
    reviewsSection.removeChild(overlayElement);
  });

  const nameElement = overlayElement.querySelector(".overlay__name");
  nameElement.innerHTML = name;

  const textElement = overlayElement.querySelector(".overlay__text");
  textElement.innerHTML = text;

  return overlayElement;
}