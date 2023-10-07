// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';


const galleryImage = document.querySelector('.gallery');
const imageMarkup = createImageCardsMarkup(galleryItems);

galleryImage.insertAdjacentHTML('beforeend', imageMarkup);
galleryImage.style.listStyle = 'none';

function createImageCardsMarkup(galleryItems) {
return galleryItems
.map(({ preview, original, description }) =>
`
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"
          loading="lazy" />
   </a>
</li>
`
).join('');
}

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
});
