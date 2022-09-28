import React, {useEffect, useState} from 'react'
import BasicExample from './BasicExample'

export default function Product() {

    const [products, setpPoducts] = useState([])

    useEffect(() => {
      // fetch all products from json-server fake backend
    }, [])
    
    // map function to create list

  return (
    <div>
        <BasicExample></BasicExample>
        {/* {list} */}
    </div>
  )
}
