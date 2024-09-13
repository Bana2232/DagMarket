// Код для автоматического переключения изображений в слайдере
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 1000); // Изменение изображения каждые 5 секунд
}

showSlides();

document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'card') {
                document.getElementById('card-payment').style.display = 'block';
                document.getElementById('qr-payment').style.display = 'none';
            } else {
                document.getElementById('card-payment').style.display = 'none';
                document.getElementById('qr-payment').style.display = 'block';
            }
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    const catalogButton = document.querySelector('.catalog-button');
    const sidebar = document.querySelector('.sidebar');
    
    catalogButton.addEventListener('click', function() {
        sidebar.classList.toggle('active'); // Переключаем класс 'active' для открытия/закрытия сайдбара
    });
    
    // Закрытие сайдбара при клике вне его области
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !catalogButton.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
