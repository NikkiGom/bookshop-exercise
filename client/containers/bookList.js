import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import BookCard from '../components/bookCard.js';

class BookList extends React.Component {
    render() {  
        const createBookList = this.props.books.map((book, i) => {
            return (
                <BookCard 
                    key={i}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    price={book.price}
                />
            );
        });  
        return(
            <div>
                {createBookList}
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchWeather }, dispatch);
// }

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList)
