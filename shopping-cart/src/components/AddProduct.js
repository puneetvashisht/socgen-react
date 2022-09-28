import React, {useState} from 'react'
import classes from './AddProduct.module.css'

export default function AddProduct() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [nameIsValid, setNameIsValid] = useState();
    const [descriptionIsValid, setDescriptionIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value)
        setFormIsValid(e.target.value.length > 3);
    }

    const validateName = () => {
        setNameIsValid(name.length > 3)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
        setFormIsValid(e.target.value.length > 0);
    }
    const validateDescription = () => {
        setDescriptionIsValid(description.length > 0)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const addProduct = () => {
        console.log({name, description, price});
        //
        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, description, price})
        })
        .then(res=> {
            if(res.status===201){
                console.log('Successfully added to the server!')
            }
        })
    }
  return (
    <>
    <div className={`mb-3 ${classes.control} ${nameIsValid === false ? classes.invalid : ''}`}>
    <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
    <input type="text" onBlur={validateName} onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
    </div>
    <div className={`mb-3 ${classes.control} ${descriptionIsValid === false ? classes.invalid : ''}`}>
    <label htmlFor="exampleFormControlInput1" className="form-label">Product Description</label>
    <input type="text" onBlur={validateDescription} onChange={handleDescriptionChange} value={description} className="form-control" id="exampleFormControlInput1" placeholder="Enter Description"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
    <input type="number" onChange={handlePriceChange} value={price} className="form-control" id="exampleFormControlInput1" placeholder="Enter Price"/>
    </div>
    <div className="mb-3">
    <button onClick={addProduct} disabled={!formIsValid} className="btn btn-primary">Add Product</button>
    </div>
    </>
    
  )
}
