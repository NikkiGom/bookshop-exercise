import React from 'react';

const BookCard = (props) => {
    return(
        <div style={{padding: '20px'}}>
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
        </div>
    );
}

export default BookCard;