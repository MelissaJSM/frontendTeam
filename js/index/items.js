document.addEventListener("DOMContentLoaded", function() {
  const genres = [
    { img: "../img/index/bestSeller.png", url: "month.html" },
    { img: "../img/index/literature.png", url: "genre/literature.html" },
    { img: "../img/index/nonliterature.png", url: "genre/nonLliterature.html" },
    { img: "../img/index/kiz.png", url: "genre/kiz.html" },
    { img: "../img/index/practical.png", url: "genre/practical.html" },
    { img: "../img/index/magazine.png", url: "genre/magazine.html" },
    { img: "../img/index/e-Book.png", url: "genre/eBook.html" },
    { img: "../img/index/soundNovel.png", url: "genre/soundNovel.html" },
    { img: "../img/index/etc.png", url: "genre/etc.html" },
  ];

  const genresContainer = document.getElementById('genres');
  let itemsPerLoad = 3;
  let currentIndex = 0;
  let loading = false;

  function loadGenres() {
    loading = true;
    const fragment = document.createDocumentFragment();
    for (let i = currentIndex; i < currentIndex + itemsPerLoad && i < genres.length; i++) {
      const genreDiv = document.createElement('div');
      genreDiv.className = 'genre';
      const link = document.createElement('a');
      link.href = genres[i].url;
      link.style.display = 'block';  // Ensure the link takes the full space
      const img = document.createElement('img');
      img.src = genres[i].img;
      const name = document.createElement('div');
      name.textContent = genres[i].name;
      link.appendChild(img);
      genreDiv.appendChild(link);
      genreDiv.appendChild(name);
      fragment.appendChild(genreDiv);
    }
    genresContainer.appendChild(fragment);

    const newItems = document.querySelectorAll('.genre');
    const lastItem = newItems[newItems.length - 1];
    lastItem.addEventListener('animationend', function() {
      loading = false;
      window.dispatchEvent(new Event('scroll'));
    });

    currentIndex += itemsPerLoad;
  }

  function handleScroll() {
    if (loading) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadGenres();
    }
  }

  window.addEventListener('scroll', handleScroll);

  loadGenres();
});
