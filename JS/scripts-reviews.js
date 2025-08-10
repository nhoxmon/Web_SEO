// Load dữ liệu từ file JSON
fetch('reviews.json')
    .then(res => res.json())
    .then(data => {
        // Hiển thị điểm trung bình
        document.getElementById('avg-score').textContent = data.average;
        document.getElementById('total-reviews').textContent = `${data.totalReviews} đánh giá`;

        // Hiển thị sao trung bình
        document.getElementById('avg-stars').textContent = renderStars(data.average);

        // Hiển thị thanh rating
        const barsContainer = document.getElementById('rating-bars');
        for (let i = 5; i >= 1; i--) {
            const bar = document.createElement('div');
            bar.classList.add('bar');

            const label = document.createElement('span');
            label.textContent = `${i}★`;

            const fill = document.createElement('div');
            fill.classList.add('fill');
            fill.style.width = data.ratings[i] + '%';

            bar.appendChild(label);
            bar.appendChild(fill);
            barsContainer.appendChild(bar);
        }

        // Hiển thị danh sách review
        const reviewList = document.getElementById('review-list');
        data.reviews.forEach(r => {
            const review = document.createElement('div');
            review.classList.add('review');

            const name = document.createElement('strong');
            name.textContent = r.name;

            const stars = document.createElement('span');
            stars.classList.add('stars');
            stars.textContent = renderStars(r.stars);

            const comment = document.createElement('p');
            comment.textContent = r.comment;

            review.appendChild(name);
            review.appendChild(stars);
            review.appendChild(comment);

            reviewList.appendChild(review);
        });
    });

// Hàm render sao
function renderStars(score) {
    const full = Math.floor(score);
    const half = score % 1 >= 0.5 ? 1 : 0;
    return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - half);
}
