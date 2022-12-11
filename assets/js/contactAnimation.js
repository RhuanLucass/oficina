const description = document.querySelector(".contact .title-contact");
const contacts = document.querySelectorAll(".contacts a[data-name]");

contacts.forEach((contact) =>
  contact.addEventListener("mouseover", showDescription)
);
contacts.forEach((contact) =>
  contact.addEventListener("mouseout", hideDescription)
);

function showDescription() {
  const dataName = this.getAttribute("data-name");
  const dataColor = this.getAttribute("data-color");

  description.childNodes[1].innerHTML = dataName;
  description.style.backgroundColor = dataColor;
  description.style.opacity = "1";
}

function hideDescription() {
  description.style.opacity = "0";
}
