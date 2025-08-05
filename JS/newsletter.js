function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('.newsletter-input').value;
    alert(`Cảm ơn ${email} đã đăng ký nhận tin từ Cookmate!`);
    event.target.reset();
}
