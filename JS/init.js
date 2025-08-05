document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateCartCount();
    handleScrollAnimations();
    renderProducts();
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('loginModal')) {
        closeModal();
    }
});
