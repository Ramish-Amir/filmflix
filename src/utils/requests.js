const API_KEY = "24cb94607368df42013bedbca1536730";

const requests = {
    // Movie Categories
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    // Movie Genres
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMusicyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchTVMovieMovies: `/discover/movie?api_key=${API_KEY}&with_genres=1078`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

    // Movie Details   
    fetchDetails: `?api_key=${API_KEY}&language=en-US`,

    // Similar
    // Example (TV Season): https://api.themoviedb.org/3/tv/92830/similar?api_key=24cb94607368df42013bedbca1536730&language=en-US&page=1
    // Example (Movies): https://api.themoviedb.org/3/movie/453395/similar?api_key=24cb94607368df42013bedbca1536730&language=en-US&page=1
    fetchSimilar: `/similar?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;