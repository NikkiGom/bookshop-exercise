import React from 'react';
import BookList from '../containers/bookList.js';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <BookList />
            </div>
        );
    }
}