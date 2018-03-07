import React from 'react';
import BookList from '../containers/bookList.js';
import Basket from '../containers/basket.js';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <BookList />
                <Basket />
            </div>
        );
    }
}