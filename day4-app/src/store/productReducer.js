let initialState = {
    products: [
       
    ]
  }
  
  // 1. create a single store for entire application
 const productReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'FETCH_PRODUCTS': 
            console.log('fetching products...');
            return {products: action.payload};
        
        case 'ADD_PRODUCT': 
            console.log('add a product...');
            // no mutations of state is allowed
            // state.products.push(action.payload)
            
            return {products: [...state.products, action.payload]};
        case 'DELETE_PRODUCT': 
            let remainingProducts = state.products.filter((p)=> p.id!=action.payload.id)
            return {products: remainingProducts};
  
        default: 
            console.log('default action...')
            return {products: state.products};
    }
  }

  export default productReducer;