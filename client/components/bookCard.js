import React from 'react';

export default class BookCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(book) {
        this.props.goBasket(book)
    }

    render() {
        return(
            <div style={{padding: '20px'}}>
                <div>{this.props.title}</div>
                <div>{this.props.author}</div>
                <div>{this.props.description}</div>
                <div style={{padding: '20px'}}>{this.props.price}</div>
                <div 
                    style={{cursor: 'pointer'}}
                    onClick={this.handleClick}
                >
                    add to basket
                </div>
            </div>
        );
    }
} 
    
