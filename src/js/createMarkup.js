export async function createMarkup(data) {
    return (await Promise.all(data.map(async ({ id }) => {
        const { title, vote_average, genres, poster_path, release_date, tagline } = await moviesAPI.getFilmById(id);
            
        return `<li class="films__item">
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${tagline}" class="films__img">
                    <div class="films__content">
                        <h2 class="films__title">${title}</h2>
                        <p class="films__category">${genres.map(e => e.name).join(', ')} | ${release_date.slice(0, 4)}</p>
                        <p class="films__rating">${vote_average.toFixed(2)}</p>
                    </div>
                </li>`;
    }))).join('');
};