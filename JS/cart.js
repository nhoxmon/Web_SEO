// Khởi tạo giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('cookmate-cart')) || [];

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = cart.length;
  }
}

// Thêm sản phẩm vào giỏ
window.addToCart = function(name, event) {
  cart.push({
    name,
    id: Date.now(),
    price: Math.floor(Math.random() * 2000000) + 500000 // Giá demo
  });

  localStorage.setItem('cookmate-cart', JSON.stringify(cart));
  updateCartCount();

  // Hiệu ứng nút
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = '✓ Đã thêm!';
  button.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = 'linear-gradient(45deg, #50B2C0, #FAAA8D)';
  }, 2000);
};

// Xem giỏ hàng
window.toggleCart = function() {
  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống!');
    return;
  }

  const cartItems = cart.map(item => `• ${item.name} - ${item.price.toLocaleString('vi-VN')}₫`).join('\n');
  const total = cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('vi-VN');
  alert(`Giỏ hàng của bạn:\n\n${cartItems}\n\nTổng: ${total}₫`);
};

// Khởi tạo số lượng giỏ khi tải trang
document.addEventListener('DOMContentLoaded', updateCartCount);
