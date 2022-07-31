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

  onGallaryModalAdd(e);
}

function onGallaryModalAdd(e) {
  const modalGallary = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onModalClose);
      },
    }
  );
  modalGallary.show();

  window.addEventListener("keydown", onModalClose);

  function onModalClose(e) {
    if (e.code === "Escape") {
      modalGallary.close();
    }
  }
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
