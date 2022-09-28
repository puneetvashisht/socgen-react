import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
// 1. Single place for products Storage
// 2. fetch/http call is not at a single place
// 3. Component is doing template modification/http calls

const ProductList = (props) => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //   // fetch all products from json-server fake backend
      
    // }, [])
    
    // map function to create list
    let productMap = props.products && props.products.map((product, i)=> <li>{product.name}<button onClick={()=>props.onDeleteProduct(product.id)} className="btn btn-danger">X</button></li>)

  return (
    <div className="row">
        <ul>
        {productMap} 
        </ul>
        
    </div>
  )
}

const mapStateToProps = (state)=> {
    console.log(state);
    return {
      products: state.products
    }
  }
  const mapDispatchToProps = (dispatch)=> {
    return {
      onDeleteProduct: (id) =>  { dispatch({type:'DELETE_PRODUCT', payload: {id}})}
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
