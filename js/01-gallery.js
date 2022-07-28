import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galaryEl = document.querySelector(".gallery");

galaryEl.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galaryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

function makeGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
        alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

const addGallaryMarkup = makeGalleryMarkup(galleryItems);
galaryEl.innerHTML = addGallaryMarkup;

// const makeGalleryMarkup = ({ preview, original, description }) => {
//   return `<div class="gallery__item">
//   <a class="gallery__link"${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//         alt="${description}"
//     />
//   </a>
// </div>`;
// };

// const addGalleryMarkup = galleryItems.map(makeGalleryMarkup).join("");

// galaryEl.insertAdjacentHTML("beforeend", addGalleryMarkup);
