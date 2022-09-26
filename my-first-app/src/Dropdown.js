import React, { useState } from 'react'
import DropdownItem from './DropdownItem'

export default function Dropdown() {
    const [show, setShow] = useState(false)
    const [caption, setCaption] = useState('Select Course')
    const [items, setItems] = useState([
        {text: 'Angular'},
        {text: 'React'},
        {text: 'NodeJS'},
    ])

    const changeCaption = (caption) => {
        console.log('In parent, change caption: ', caption)
        setCaption(caption)
        setShow(false)
    }

    let itemsList = items.map((item, i)=> {
        return <DropdownItem key={i} text={item.text} whenItemClicked={changeCaption}></DropdownItem>
    })
  
    const toggleShow = () => setShow(!show)
    
  return (
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" onClick={toggleShow} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {caption}
    </button>
    <ul className={show? 'dropdown-menu show': 'dropdown-menu'}>
       {itemsList}
    </ul>
    </div>
  )
}
