import React from 'react'

export default function DropdownItem(props) {
  return (
    <li><a onClick={()=>props.whenItemClicked(props.text)} className="dropdown-item" href="#">{props.text}</a></li>
  )
}
