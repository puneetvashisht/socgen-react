import React, { useState } from 'react'

export default function AddEmployee() {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
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

    <div class="mb-3">
    <label forName="exampleFormControlInput1" className="form-label">Employee Name</label>
    <input type="text" onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
    </div>
    <div class="mb-3">
    <label forName="exampleFormControlInput2" className="form-label">Employee Salary</label>
    <input type="number" onChange={(event)=>setSalary(event.target.value)} value={salary} className="form-control" id="exampleFormControlInput2" placeholder="Enter Salary"/>
    </div>
    <div class="mb-3">
    <button onClick={addEmployee} className="btn btn-primary">Add Employee</button>
    </div>

    </>
  )
}
