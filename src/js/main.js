import { MoviesAPI } from "./MovieDatabaseAPI";
import { refs } from "./refs";
import { createPaginationMarkup } from "./pagination";
import { createMarkup } from "./createMarkup";

const moviesAPI = new MoviesAPI();

initPage();

async function initPage() {
    try {
        const data = await moviesAPI.getPopularFilms();
        // console.log(data);
        const {page, results, total_pages} = data
        const markup = await createMarkup(results);
        const paginationMarkup = createPaginationMarkup(total_pages, page);
        // console.log(window.screen.width);
        refs.filmsList.innerHTML = markup;
        refs.pagination.innerHTML = paginationMarkup;
    } catch (error) {
        console.log(error.message);
    }
}










