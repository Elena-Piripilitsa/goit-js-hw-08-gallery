import images from "./gallery-items.js";
const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const overlayRef = document.querySelector(".lightbox__overlay");
const imageModalRef = document.querySelector(".lightbox__image");
const btnModalCloseRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);

function createGallery(images) {
  const createItems = images.map((image) => {
    const itemRef = document.createElement("li");
    itemRef.classList.add("gallery__item");

    const linkRef = document.createElement("a");
    linkRef.classList.add("gallery__link");
    linkRef.href = image.original;
    itemRef.append(linkRef);

    const imageRef = document.createElement("img");
    imageRef.classList.add("gallery__image");
    imageRef.alt = image.description;
    imageRef.src = image.preview;
    imageRef.dataset.source = image.original;
    linkRef.append(imageRef);

    return itemRef;
  });
  return createItems;
}
galleryRef.append(...createGallery(images));

function onOpenModal() {
  event.preventDefault();
  modalRef.classList.add("is-open");
  imageModalRef.src = event.target.dataset.source;
}

function onCloseModal() {
  modalRef.classList.remove("is-open");
  imageModalRef.src = "";
}
function onEscClose() {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

galleryRef.addEventListener("click", onOpenModal);
overlayRef.addEventListener("click", onCloseModal);
btnModalCloseRef.addEventListener("click", onCloseModal);
window.addEventListener("keydown", onEscClose);
