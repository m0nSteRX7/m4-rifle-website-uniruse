// This file contains JavaScript code for interactive elements on the website.

// Function to open the full-sized image from the gallery
function openImage(imageSrc) {
    const fullImage = document.createElement('img');
    fullImage.src = imageSrc;
    fullImage.style.width = '80%'; // Set the width of the full image
    fullImage.style.height = 'auto'; // Maintain aspect ratio
    fullImage.style.position = 'fixed';
    fullImage.style.top = '50%';
    fullImage.style.left = '50%';
    fullImage.style.transform = 'translate(-50%, -50%)';
    fullImage.style.zIndex = '1000';
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '999';
    overlay.onclick = function() {
        document.body.removeChild(overlay);
        document.body.removeChild(fullImage);
    };

    document.body.appendChild(overlay);
    document.body.appendChild(fullImage);
}

// Function to set up gallery click events
function setupGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullImageSrc = this.getAttribute('data-full');
            openImage(fullImageSrc);
        });
    });
}

// Initialize the gallery when the document is ready
document.addEventListener('DOMContentLoaded', setupGallery);