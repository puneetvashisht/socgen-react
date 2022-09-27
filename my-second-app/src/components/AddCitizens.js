import React, { useState } from 'react'

export default function AddCitizens() {
    const status = ["Vaccinated", "Not Vaccinated"];


    // const [fruit, setFruit] = useState("apple");
    const [name, setName] = useState('')
    const [vaccinated, setVaccinated] = useState('Not Vaccinated')
    const [message, setMessage] = useState('')

    const handleNameChange = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const addCitizen = ()=> {
        console.log({name, vaccinated})
        // make http post call to server
        // fetch('http://localhost:8000/citizens', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({name, vaccinated})
        // })
        // .then(res=> {
        //     if(res.status===201){
        //         console.log('Successfully added to the server!')
        //         setMessage('Successfully added to the server!')
        //     }
        // })
    
    }

  return (
    <>
    {message && <div class="alert alert-success" role="alert">
        {message}
    </div>}

    <div class="mb-3">
    <label forName="exampleFormControlInput1" className="form-label">Citizen Name</label>
    <input type="text" onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
    </div>
    <div class="mb-3">
    <label forName="exampleFormControlInput2" className="form-label">Citizen Vaccinated</label>
    {status.map(f => (
        <>
          <input
           id="exampleFormControlInput2"
            type="radio"
            name="vaccinated"
            value={f}
            checked={vaccinated === f}
            onChange={e => setVaccinated(e.currentTarget.value)}
          />{" "}
          {f}
        </>
      ))}
      <p>{vaccinated}</p>
    </div>
   
    <div class="mb-3">
    <button onClick={addCitizen} className="btn btn-primary">Add Citizen</button>
    </div>

    </>
  )
}
