import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import BasicExample from './BasicExample'
import * as actions from '../actions/product.js'

const Product = (props)=> {

    // const [products, setProducts] = useState([])

    useEffect(() => {
     props.onFetchProduct();
    }, [])
    
    // map function to create list
    let productMap = props.products && props.products.map((product, i)=> <BasicExample name={product.name} desc={product.description}></BasicExample>)

  return (
    <div className="row">
        
        {productMap}
    </div>
  )
}

const mapStateToProps = (state)=> {
  console.log(state);
  return {
    products: state.productReducer.products
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    onFetchProduct: () => dispatch(actions.fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
