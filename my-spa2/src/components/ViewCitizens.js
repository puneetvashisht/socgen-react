import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function ViewCitizens() {

    // 1. Load the citizens data on component load
    // 2. Populate in a table
    // 3. Delete complete record
    // 4. Update vaccination name & status
    const [citizens, setCitizens] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/citizens/')
        .then(res=> res.json())
        .then(data => {
            setCitizens(data);
        })
    }, [show])

    const deleteCitizen = (id) => {
        fetch('http://localhost:8000/citizens/' + id, {
            method: 'DELETE'
        })
        .then(res=>{
            console.log(res);
            setShow(!show);
        })
    }
    
    let citizenList = citizens.map((citizen, index)=> {
        return (
            <tr key={citizen.id}>
            <th scope="row">{index + 1}</th>
            <td ><Link to={'/updatecitizen/' + citizen.id}>{citizen.name}</Link></td>
            <td>{citizen.isVaccinated? 'Vaccinated': 'Not Vaccinated'}</td>
            <td><button onClick={()=>deleteCitizen(citizen.id)} className='btn btn-danger'> X </button></td>
            </tr>
        )
    })


  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Vaccination Status</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {citizenList}
  </tbody>
</table>
  )
}
