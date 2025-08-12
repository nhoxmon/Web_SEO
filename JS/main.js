

function renderProducts() {
  const container = document.getElementById('productList');
  if (!container) return;

  container.innerHTML = ''; // Xóa cũ

  products.forEach(product => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString('vi-VN')}₫</p>
      <button onclick="addToCart('${product.name}', event)">Thêm vào giỏ</button>
    `;
    container.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);





