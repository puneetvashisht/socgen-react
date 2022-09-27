import React, {useEffect, useState} from 'react'

export default function ViewCitizens() {

    // 1. Load the citizens data on component load
    // 2. Populate in a table
    // 3. Delete complete record
    // 4. Update vaccination status
    const [citizens, setCitizens] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/citizens/')
        .then(res=> res.json())
        .then(data => {
            setCitizens(data);
        })
    }, [])
    
    let citizenList = citizens.map((citizen, index)=> {
        return (
            <tr key={citizen.id}>
            <th scope="row">{index + 1}</th>
            <td >{citizen.name}</td>
            <td>{citizen.isVaccinated? 'Vaccinated': 'Not Vaccinated'}</td>
            <td>Delete</td>
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
