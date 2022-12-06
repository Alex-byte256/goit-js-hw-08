// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
  .map(
    el => `
	 <a class="gallery__item" href="${el.original}">
	 <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>
	`
  )
  .join('');

galleryRef.innerHTML = galleryMarkUp;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
