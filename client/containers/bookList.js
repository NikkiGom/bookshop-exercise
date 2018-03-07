import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { basket } from '../actions/index.js';
import BookCard from '../components/bookCard.js';

class BookList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.addToBasket = this.addToBasket.bind(this);
    }

    addToBasket(book) {
        this.props.addToBasket(book);
    }

    render() {  
        const createBookList = this.props.books.map((book, i) => {
            return (
                <BookCard 
                    key={i}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    price={book.price}
                    goBasket={() => this.addToBasket(book)}
                />
            );
        });  
        return(
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {createBookList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToBasket: basket }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
