import React from 'react'
import Child from './Child'

export default function Parent() {
 
  const parentFn = (arg) =>{
    console.log('parent function' , arg)
  }  
    
  return (
    <>
        <div>Parent</div>
        <hr/>
        <Child attr="abc" whenChildClick={parentFn}></Child>
    </>
  )
}
