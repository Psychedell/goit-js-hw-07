import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galaryEl = document.querySelector(".gallery");

function makeGalleryMarkup(items) {
  return items
    .map(
      ({
        preview,
        original,
        description,
      }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
}

const addGallaryMarkup = makeGalleryMarkup(galleryItems);
galaryEl.innerHTML = addGallaryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 150,
});
