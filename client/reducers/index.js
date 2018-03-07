import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import BasketReducer from './reducer_basket.js';

const rootReducer = combineReducers({
    books: BooksReducer,
    updateBasket: BasketReducer
});

export default rootReducer;