import React, { useState } from 'react'
import classes from './AddEmployee.module.css';

export default function AddEmployee() {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')
    const [message, setMessage] = useState('')
    const [nameIsValid, setNameIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const validateNameHandler = () => {
        setNameIsValid(name.length > 3 );
      };

    const handleNameChange = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
        setFormIsValid(event.target.value.length > 3);
        
    }
    const addEmployee = ()=> {
        console.log({name, salary})
        // make http post call to server
        fetch('http://localhost:8000/employees', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, salary})
        })
        .then(res=> {
            if(res.status==201){
                console.log('Successfully added to the server!')
                setMessage('Successfully added to the server!')
            }
        })
    
    }

  return (
    <>
    {message && <div class="alert alert-success" role="alert">
        {message}
    </div>}

    <div className={`mb-3 ${classes.control} ${nameIsValid === false ? classes.invalid : ''}`}>
   
    <label forName="exampleFormControlInput1" className="form-label">Employee Name</label>
    <input type="text"  onBlur={validateNameHandler} onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
    </div>
    <div class="mb-3">
    <label forName="exampleFormControlInput2" className="form-label">Employee Salary</label>
    <input type="number" onChange={(event)=>setSalary(event.target.value)} value={salary} className="form-control" id="exampleFormControlInput2" placeholder="Enter Salary"/>
    </div>
    <div class="mb-3">
    <button onClick={addEmployee} className='btn btn-primary' disabled={!formIsValid}>Add Employee</button>
    </div>

    </>
  )
}
