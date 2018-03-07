export function basket(book) {
    return {
        type: 'ADD_TO_BASKET',
        payload: book
    }
}