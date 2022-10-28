export function createPaginationMarkup(totalPages, page) {
    let markup = ''
    let activeItem;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (totalPages === page) {
        return;
    }
    if (page === 1 && totalPages > 6) {
        markup += `<li class="numb active"><span>1</span></li>`
        for (let i = 2; i < 6; i++) {
            markup += `<li class="numb"><span>${i}</span></li>`
            
        }
    }
    if (page > 1) {
        markup += `<li class="btn__prev"><span>Prev</span></li>`;
    }
    if (page > 2) {
        markup += `<li class="numb"><span>1</span></li>`;
        if (page === 4) {
            markup += `<li class="numb"><span>2</span></li>`;
        }
        if (page > 4) {
            markup += `<li class="numb"><span>...</span></li>`;
        }
    }

    if (page !== 1) {
        for (let i = beforePages; i <= afterPages; i++) {
            if (!i) { continue }

            if (page === i) {
                activeItem = 'active';
            } else {
                activeItem = '';
            }

            markup += `<li class="numb ${activeItem}"><span>${i}</span></li>`
        }
    }
    if (page < totalPages - 1) {
        
        if (page === totalPages - 2) {
            markup += `<li class="numb"><span>2</span></li>`;
        }
        if (page < totalPages - 2) {
            markup += `<li class="numb"><span>...</span></li>`;
        }
        markup += `<li class="numb"><span>${totalPages}</span></li>`;
    }
    if (totalPages > page) {
        markup += `<li class="btn__next"><span>Next</span></li>`;
    }
    return markup;
}