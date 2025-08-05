let currentProduct = 0;

function changeProduct(index) {
    document.querySelectorAll('.product-image').forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentProduct = index;
}

setInterval(() => {
    currentProduct = (currentProduct + 1) % products.length;
    changeProduct(currentProduct);
}, 5000);
