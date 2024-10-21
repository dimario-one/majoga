const newsCards = document.querySelectorAll('.news-card');
const backToNews = document.querySelectorAll('.news-btn');

newsCards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url'); 
    if (url) {
      window.location.href = url;
    }
  });
});

backToNews.forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-url'); 
    if (url) {
      window.location.href = url;
    }
  });
});
