import React, {useState} from 'react'
import { connect } from 'react-redux'
import classes from './AddProduct.module.css'
import * as actions from '../actions/product.js'

const AddProduct = (props) => {

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
        console.log({ name, description, price});
        props.onAddProduct({name, description, price})
        // dispatch ADD_PRODUCT to store
       
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


const mapDispatchToProps = (dispatch)=> {
    return {
      onAddProduct: (product) =>  {dispatch(actions.addProduct(product))}
    }
  }
  
  export default connect(null, mapDispatchToProps)(AddProduct)
