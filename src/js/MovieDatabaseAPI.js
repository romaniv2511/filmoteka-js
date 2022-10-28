export class MoviesAPI {
    static options = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzRlN2I0YzI3ZGI2ODI3MzkzMDFiOGI0NmRjMDQ1MiIsInN1YiI6IjYzNTE4YzI1MDc2Y2U4MDA3ZjAwN2Y3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ogbS0O-XqsgMhjQlDq3XNa-aGnndw7kf2JEyUslGNU',
                Accept: 'application/json',
            }
        }
    static BASE_URL = 'https://api.themoviedb.org';
    constructor() {

    }

    async getPopularFilms(page=1) {
        const url = `${MoviesAPI.BASE_URL}/3/trending/movie/week?page=${page}`;
        
        const response = await fetch(url, MoviesAPI.options);
        const data = await response.json();
        return data;
    }
    async getFilmById(id) {
        const url = `${MoviesAPI.BASE_URL}/3/movie/${id}`;

        const response = await fetch(url, MoviesAPI.options);
        if (!response.ok) {
            throw new Error(response.status);
            }
        const data = await response.json();
        return data;
    }
}

