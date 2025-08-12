function viewProducts() {
    window.location.href = 'products.html'; // Đường dẫn đến trang HTML mới
}

function viewProductsDetails() {
    window.location.href = 'details.html'; // Đường dẫn đến trang HTML mới
}

document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.startsWith('#')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});