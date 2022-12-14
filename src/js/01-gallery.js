// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from '/src/js/gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector(".gallery");
const galleyMarkup = createGallery(galleryItems);


galleryBox.insertAdjacentHTML('afterbegin', galleyMarkup);

console.log(createGallery(galleryItems));
function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link"
                    href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
        })
        .join("");
};

 var lightbox = new SimpleLightbox('.gallery a', {
        enableKeyboard: true,
        navText: ['←','→']
    });

