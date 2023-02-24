/* Product-page */

const images = document.querySelectorAll('.imgCourse1');
const mainPhoto = document.querySelector('#mainPhoto');

// Додаємо обробник події на кожне зображення в слайдері
images.forEach(image => {
    image.addEventListener('click', () => {
        mainPhoto.src = image.src; // змінюємо src атрибут зображення продукту на src атрибут клікнутого зображення в слайдері
    });
});


const textComment = document.querySelector('.comment__box');
const textCommentContent = textComment.textContent; 