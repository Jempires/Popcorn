


export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const API_KEY_ONLY = 'c222696c96fc8eb7f5f62c8be5b03bfa';
export const API_KEY = `api_key=${API_KEY_ONLY}`;

export const LANG_EN_URL = '&language=en-US';

// URL - Popular, Top Rated, Now Playing & Upcoming Movies 
export const endPointPopularMovies = `${BASE_URL}popular?${API_KEY}`;
export const endPointTopRatedMovies = `${BASE_URL}top_rated?${API_KEY}`;
export const endPointNowPlayingMovies = `${BASE_URL}now_playing?${API_KEY}`;
export const endPointUpcomingMovies = `${BASE_URL}upcoming?${API_KEY}`;

// Search URL 
export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie/`;

// Images 
export const IMG_URL = 'https://image.tmdb.org/t/p/';
export const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export const FAVORITES_STORAGE = 'favorites';

// Get Movie detail
// `${BASE_URL}${movie_id}?${API_KEY}&language=en-US`;

// get release dates:
// `${BASE_URL}{movie_id}/release_dates?${API_KEY}`;

// get genre:
// https://api.themoviedb.org/3/genre/movie/list?${API_KEY}&language=en-US


