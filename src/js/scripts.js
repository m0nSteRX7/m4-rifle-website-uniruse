// Този файл съдържа JavaScript код за интерактивни елементи на уебсайта.

// Функция за отваряне на изображението в пълен размер от галерията
function openImage(imageSrc) {
    const fullImage = document.createElement('img');
    fullImage.src = imageSrc;
    fullImage.style.width = '80%'; // Задаване на ширината на пълното изображение
    fullImage.style.height = 'auto'; // Поддържане на съотношението на страните
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

// Функция за настройка на събитията за кликване в галерията
function setupGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullImageSrc = this.getAttribute('data-full');
            openImage(fullImageSrc);
        });
    });
}

// Инициализиране на галерията, когато документът е готов
document.addEventListener('DOMContentLoaded', setupGallery);