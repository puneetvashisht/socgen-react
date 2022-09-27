import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateCitizen() {
    const status = [true, false];
    const { citizenId } = useParams()
    let navigate = useNavigate();

    // const [fruit, setFruit] = useState("apple");
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [vaccinated, setVaccinated] = useState(true)
    
    useEffect(() => {
     fetch('http://localhost:8000/citizens/' + citizenId)
     .then(res=>res.json())
     .then(data => {
        console.log(data);
        setId(data.id)
        setName(data.name);
        setVaccinated(data.isVaccinated);
     })
    }, [citizenId])
    

    const handleNameChange = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const updateCitizen = () => {
        console.log({id ,name, vaccinated})
        // make http post call to server
        fetch('http://localhost:8000/citizens/'+id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, isVaccinated: vaccinated})
        })
        .then(res=> {
            if(res.status===200){
                console.log('Successfully updated to the server!')
                navigate('/viewcitizens')
            }
        })
    
    }

  return (
    <>

    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Citizen Id</label>
    <input type="text" disabled onChange={(e)=>setId(e.target.value)} value={id} className="form-control" id="exampleFormControlInput1" placeholder="Enter Id"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput3" className="form-label">Citizen Name</label>
    <input type="text" onChange={handleNameChange} value={name} className="form-control" id="exampleFormControlInput3" placeholder="Enter Name"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput2" className="form-label">Citizen Vaccinated</label>
    </div>
    <div>
    {status.map((v, index) => (
        <div  key={index}>
          <input
           id="exampleFormControlInput2"
            type="radio"
            name="vaccinated"
            value={v}
            checked={vaccinated === v}
            onChange={e => {
                console.log(JSON.parse(e.target.value));
                setVaccinated(JSON.parse(e.target.value))}
            } 
          />
          {v?'Vaccinated': 'Not Vaccinated'}
        </div>
      ))}
      {/* <p>{vaccinated?'Vaccinated': 'Not Vaccinated'}</p> */}
    </div>
   
    <div className="mb-3">
    <button onClick={updateCitizen} className="btn btn-primary">Update Citizen</button>
    </div>

    </>
  )
}
