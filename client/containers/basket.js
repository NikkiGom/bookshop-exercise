import React from 'react';
import { connect } from 'react-redux';

class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.createList = this.createList.bind(this);
    }

    createList() {
        return Object.entries(this.props.updateBasket.productMap).map((chosenBook, i) => {
            return <div key={i}>name of book: {this.props.books[chosenBook[0] - 1].title}, x {chosenBook[1]}</div>
        });
    }

    render() {
        return ( 
            <div>
                <div>basket</div>
                <div>{this.props.updateBasket.total}</div>
                {this.createList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updateBasket: state.updateBasket,
        books: state.books
    };
}

export default connect(mapStateToProps)(Basket);



