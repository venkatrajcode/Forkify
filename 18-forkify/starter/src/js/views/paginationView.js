import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const pageNum = Math.ceil(
      this._data.results.length / this._data.resultPerPage,
    );
    console.log(pageNum);
    // <button class="btn--inline pagination__btn--prev">
    //         <svg class="search__icon">
    //           <use href="src/img/icons.svg#icon-arrow-left"></use>
    //         </svg>
    //         <span>Page 1</span>
    //       </button>
    //       <button class="btn--inline pagination__btn--next">
    //         <span>Page 3</span>
    //         <svg class="search__icon">
    //           <use href="src/img/icons.svg#icon-arrow-right"></use>
    //         </svg>
    //       </button>

    // Page 1 and there are other pages.
    if (currentPage === 1 && pageNum > 1) {
      return `<button class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    // Last page
    if (currentPage === pageNum && pageNum > 1) {
      return `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
    }

    // Other page
    if (currentPage < pageNum) {
      return `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // Page 1 and there are no other pages
    return 'only one page';
  }
}

export default new PaginationView();
