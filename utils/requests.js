const { API_KEY } = process.env;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated/?api_key=${API_KEY}&language=en_US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=10749`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=9648`,
  },
  fetchScifiMovies: {
    title: 'Scifi',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=878`,
  },
  fetchWesternMovies: {
    title: 'Western',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=37`,
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=16`,
  },
  fetchTv: {
    title: 'Tv Movie',
    url: `/discover/movie/?api_key=${API_KEY}&with_generes=10770`,
  },
};
