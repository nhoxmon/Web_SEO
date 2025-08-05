function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><strong>${p.price.toLocaleString()}₫</strong></p>
      <button onclick="addToCart('${p.name}', event)">Thêm vào giỏ</button>
    `;
    grid.appendChild(card);
  });
}

console.log("Rendered:", list.length);

