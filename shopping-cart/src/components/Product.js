import React, {useEffect, useState} from 'react'
import BasicExample from './BasicExample'

export default function Product() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      // fetch all products from json-server fake backend
      fetch('http://localhost:8000/products')
      .then(res=>res.json())
      .then(products => setProducts(products))
    }, [])
    
    // map function to create list
    let productMap = products.map((product, i)=> <BasicExample name={product.name} desc={product.description}></BasicExample>)

  return (
    <div className="row">
        
        {productMap}
    </div>
  )
}
