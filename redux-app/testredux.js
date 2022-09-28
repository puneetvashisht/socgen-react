const redux = require('redux');

let initialState = {
    products: [
        {id: 1, name:'iPhone', description:'from Applee', price: 445455},
        {id: 2, name:'iPad', description:'from Applee', price: 245455}
    ]
}

// 1. create a single store for entire application
const store = redux.createStore((state = initialState, action)=> {
    switch(action.type){
        case 'FETCH_PRODUCTS': 
            console.log('fetching products...');
            return state.products;
        
        case 'ADD_PRODUCT': 
            console.log('add a product...');
            // no mutations of state is allowed
            // state.products.push(action.payload)
            return [...state.products, action.payload];
        case 'DELETE_PRODUCT': 
            let remainingProducts = state.products.filter((p)=> p.id!=action.payload.id)
            return {product: remainingProducts};

        default: 
            console.log('default action...')
            return state;
    }
})
// 2. Listening for any state changes
store.subscribe(() => console.log(store.getState()))

// 3. Dispatch actions
// store.dispatch({type: 'FETCH_PRODUCTS'})
// store.dispatch({type: 'ADD_PRODUCT', payload: {id: 3, name:'iWatch', description:'from Applee', price: 245455}})
store.dispatch({type: 'DELETE_PRODUCT', payload: {id: 2}});