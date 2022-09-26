import React from 'react'

export default function Child(props) {

  const whenItemClick = ()=>{
    props.whenChildClick('xyz')
  }

  return (
    <>
    <div>Child {props.attr}</div>
    < a href="#" onClick={()=>props.whenChildClick('xyz')}>Call Parent</a>
    </>
  )
}
