
const baseUrl = 'http://localhost:8000/products'

export const deleteProduct = (id) => {
    
    return (dispatch) => {
        fetch(baseUrl+id, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            dispatch({type:'DELETE_PRODUCT', payload: {id}})
        })
    }
}

export const addProduct = (product) => {
    
    return (dispatch) => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> {
            if(res.status===201){
               dispatch({type: 'ADD_PRODUCT', payload:product})
            }
        })
    }
}

export const fetchProducts = () => {
    // fetch from API
    console.log('fetch products in action ..');
    return (dispatch) => {
        fetch(baseUrl)
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            dispatch({type:'FETCH_PRODUCTS', payload: data})
        })
    }

}