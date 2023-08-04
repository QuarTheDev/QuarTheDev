document.addEventListener('DOMContentLoaded', function() {
    var articleTitle = document.querySelector('.article-title').textContent;
    document.title = "Quar │ " + articleTitle;
  });