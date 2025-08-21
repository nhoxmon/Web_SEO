let currentProduct = 0;
let autoSlideInterval;

function changeProduct(index) {
    document.querySelectorAll('.product-image').forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentProduct = index;
}

// Tự động chuyển ảnh 
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        let nextIndex = (currentProduct + 1) % document.querySelectorAll('.product-image').length;
        changeProduct(nextIndex);
    }, 2000);
}

// Khởi động khi trang load
window.addEventListener('DOMContentLoaded', startAutoSlide);
