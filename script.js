const imageContainer = document.getElementById('image-container');
const images = ['image0.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']; // Add your image filenames

let currentIndex = 0;

function showImage(index) {
    imageContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initial display
showImage(currentIndex);

// Event listeners for navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    }
});
