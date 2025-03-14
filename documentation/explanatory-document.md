# Обяснителен документ за проекта на уебсайт за автомат M4

## 1. Въведение
Този документ очертава разработката на уебсайт, тематизиран около автомат M4. Уебсайтът е структуриран да предоставя информация за автомат M4, включително нейните спецификации, история и фото галерия. Проектът използва HTML5, CSS и JavaScript, съобразени със съвременните уеб стандарти.

## 2. Структура на проекта
Проектът е организиран в следните директории и файлове:

```
m4-rifle-website
├── src
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   ├── thumbnail1.jpg
│   │   ├── thumbnail2.jpg
│   │   ├── thumbnail3.jpg
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   └── m4a1.mp4
│   ├── js
│   │   └── scripts.js
│   └── pages
│       ├── index.html
│       ├── about.html
│       ├── gallery.html
│       ├── contact.html
│       ├── accessories.html
│       ├── variants.html
│       └── video.html
├── README.md
├── LICENSE
├── .gitattributes
└── documentation
    └── explanatory-document.md
```

## 3. Дизайн на оформлението
Оформлението на уебсайта включва:
- Заглавна част в горната част на страницата.
- Лява навигационна област за основни връзки.
- Дясна навигационна област за допълнителни връзки.
- Долен колонтитул в долната част на страницата, съдържащ информация за авторските права.

### HTML код за оформлението
Следната HTML структура се използва в `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M4 Rifle Website</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <h1>M4 Rifle</h1>
        <p>Your source for information on the M4 rifle.</p>
    </header>
    <div class="container">
        <nav class="left-nav">
            <h2>Navigation</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <main>
            <h2>Welcome to the M4 Rifle Website</h2>
        </main>
        <nav class="right-nav">
            <h2>Photo Gallery</h2>
            <div class="gallery">
                <a href="../images/image1.jpg"><img src="../images/thumbnail1.jpg" alt="M4 Rifle Image 1"></a>
                <a href="../images/image2.jpg"><img src="../images/thumbnail2.jpg" alt="M4 Rifle Image 2"></a>
                <a href="../images/image3.jpg"><img src="../images/thumbnail3.jpg" alt="M4 Rifle Image 3"></a>
            </div>
        </nav>
    </div>
    <footer>
        <p>&copy; Copyright (c) 2025 Teodor Ivanov | Contact: 123-456-7890</p>
    </footer>
    <script src="../js/scripts.js"></script>
</body>
</html>
```

## 4. CSS стилове
CSS файлът `styles.css` съдържа стилове за оформлението и дизайнерските елементи, включително:
- Стилове за заглавната част, долния колонтитул и навигацията.
- Стилове за списъци, таблици и фото галерията.

### Примерен CSS код
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

nav {
    background-color: #f4f4f4;
    padding: 15px;
}

.container {
    display: flex;
    flex: 1;
}

.left-nav {
    width: 20%;
    padding: 1em;
}

.right-nav {
    width: 20%;
    padding: 1em;
    margin-left: auto;
}

.main-content {
    display: flex;
    flex: 1;
    justify-content: space-between;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    background: url('../images/bullet.png') no-repeat left center;
    padding-left: 20px;
}

ol {
    list-style-type: upper-roman;
}

ol li:nth-child(odd) {
    font-style: italic;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:nth-child(odd) {
    background-color: #ffffff;
}

.photo-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    width: calc(100% - 40%); /* Регулирана ширина, за да се побере в основната област на съдържанието, като се вземат предвид и двете навигации */
    padding: 1em;
    margin: 0 auto; /* Центриране на галерията в основното съдържание */
}

.photo-gallery figure {
    margin: 0;
    text-align: center;
}

.photo-gallery img {
    max-width: 100%;
    height: auto;
}

@media print {
    header, footer {
        display: none;
    }
}
```

## 5. JavaScript функционалност
JavaScript файлът `scripts.js` включва функционалност за интерактивни елементи, като подобряване на навигацията и управление на фото галерията.

### Примерен JavaScript код
```javascript
// Този файл съдържа JavaScript код за интерактивни елементи на уебсайта.

// Функция за отваряне на изображение в пълен размер от галерията
function openImage(imageSrc) {
    const fullImage = document.createElement('img');
    fullImage.src = imageSrc;
    fullImage.style.width = '80%'; // Задаване на ширината на пълното изображение
    fullImage.style.height = 'auto'; // Поддържане на съотношението
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
```

## 6. Необходими елементи
Уебсайтът включва:
- Номериран списък с курсивни нечетни елементи.
- Таблица, стилизирана с CSS, показваща релевантни данни за автомат M4.
- Фото галерия с миниатюри, свързани с изображения в пълен размер.

## 7. Източници
Всеки зает код или ресурси ще бъдат документирани тук, за да се осигури правилно приписване.

Използвани ресурси:
- Код:
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css/default.asp
https://www.w3schools.com/js/default.asp

- Изображения:
https://gundigest.com/gun-reviews/the-ar-16m16-the-rifle-that-was-never-supposed-to-be
https://air-soft.gun-evasion.com/colt-m4-airline-airline-carbine-noir-airsoft-fibre-nylon-12j.html
https://www.del-ton.com/Rifle-Kit-p/rkt100-sf.htm

- Видео:
https://www.youtube.com/watch?v=p6u2pd2Y2zk

- Текст
https://www.military.com/equipment/m4-carbine
https://weaponsystems.net/system/244-Colt+M4

## 8. Заключение
Този документ предоставя цялостен преглед на проекта за уебсайт за автомат M4, описвайки структурата, оформлението и използвания код. Уебсайтът има за цел да образова потребителите за автомат M4, като същевременно предоставя ангажиращо потребителско изживяване.