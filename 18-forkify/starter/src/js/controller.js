// import { search } from 'core-js/fn/symbol';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading the recipe
    await model.loadRecipe(id);

    // 2) Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get the search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load serach results
    await model.loadSearchResults('pizza');

    // Render Results
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
