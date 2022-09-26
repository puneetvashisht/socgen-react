import React, { useState } from 'react'

export default function ViewEmployees() {

  const [employees, setEmployees] = useState([
    {id: 1, name: 'Ravi', salary: 34343.33},
    {id: 2, name: 'Priya', salary: 24343.33},
    {id: 45, name: 'Rithik', salary: 54343.33},
  ]);

  // Display employee data in a bootstrap table

  // employees.map to create a list

  return (
    <div>ViewEmployees</div>
    // {list}
  )
}
