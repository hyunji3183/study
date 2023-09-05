import axios from "axios"

export const themoviedb = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
})
themoviedb.get("movie/popular")

export const moviesApi = {
      
      nowPlaying: () => themoviedb.get("movie/now_playing"),
      upcoming: () => themoviedb.get("movie/upcoming"),
      popular: () => themoviedb.get("movie/popular"),
      movieDetail: (id) =>
            themoviedb.get(`movie/${id}`, {
                  params: {
                        append_to_response: "videos",
                  },
            }),
      search: (term) =>
            themoviedb.get("movie/search", {
                  params: {
                        query: encodeURIComponent(term),
                  },
            }),
};
console.log(moviesApi.nowPlaying);
export const tvApi = {
      topRated: () => themoviedb.get("tv/top_rated"),
      popular: () => themoviedb.get("tv/popular"),
      airingToday: () => themoviedb.get("tv/airing_today"),
      showDetail: (id) =>
            themoviedb.get(`tv/${id}`, {
                  params: {
                        append_to_response: "videos",
                  },
            }),
      search: (term) =>
            themoviedb.get("search/tv", {
                  params: {
                        query: encodeURIComponent(term),
                  },
            }),
};
