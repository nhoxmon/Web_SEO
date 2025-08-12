// Fetch footer HTML vào thẻ <footer>
fetch("footer.html")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.text();
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  })
  .catch(err => console.error("Lỗi khi load footer:", err));
