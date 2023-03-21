document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

// mujeeb stat here 
// Get all the product images
var productImages = document.querySelectorAll('.product-single__media-item');

// Listen for a change in the variant selector
document.querySelector('.product-single__meta select').addEventListener('change', function(event) {
  var selectedVariant = event.target.value.toLowerCase();
  
  // Loop through all the images and hide the ones that don't match the selected variant
  productImages.forEach(function(image) {
    if (image.dataset.variant === selectedVariant) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});
// mujeeb end here