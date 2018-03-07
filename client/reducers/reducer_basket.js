export default function(state = {productMap: {}, products: [], counter: 0, total: 0}, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            var newProducts = state.products.concat([action.payload]);
            let productMap = {};
        
            for(let product of newProducts) {
                if(!productMap[product.id]) {
                    productMap[product.id] = 1;
                } else {
                    productMap[product.id]++; 
                }
            }
            console.log(productMap);

            var newState = {
                productMap: productMap,
                products: newProducts,
                counter: state.counter + 1,
                total: state.total + action.payload.price
            }
            return newState;
    }
    return state;
}