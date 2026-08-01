import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    console.log(this._data.results.length);
    console.log(this.resultPerPage);
    const pageNum = this._data.results.length / this.resultPerPage;
    console.log(pageNum);
  }
}

export default new PaginationView();
