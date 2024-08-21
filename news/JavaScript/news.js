
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=space&apiKey=4cc8e381c63d47e9a64c5200ca2581e5
`;
const DEFAULT_IMAGE_URL = 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg';

const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const imageUrl = article.urlToImage ? article.urlToImage : DEFAULT_IMAGE_URL;

        const articleElement = document.createElement('div');
        articleElement.classList.add('magazine-column');

        articleElement.innerHTML = `
            <article class="article">
                <img src="${imageUrl}" alt="${article.title}">
                <h2 class="article-title article-title--large">
                    <a href="${article.url}" target="_blank" class="article-link">${article.title}</a>
                </h2>
                <div class="article-excerpt">
                    <p>${article.description}</p>
                </div>
            </article>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Fetch and display news on page load
fetchNews();
