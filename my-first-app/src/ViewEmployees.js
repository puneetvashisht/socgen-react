import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ViewEmployees() {

    console.log('constructor... ')
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log('initialization. .. cdm... ')
        axios.get('http://localhost:8000/employees')
        .then(res=>{
            console.log(res);
            setEmployees(res.data);
        })
    }, [show])


    

    // const loadData = () => {
    //     // http call to server to get data: localhost:8000/employees
    //     // third-party promise based library
        
    //     // .then(data=>{
    //     //     console.log(data);
            
    //     // })
    // }

    const deleteEmployee = (id) => {
        // http-delete

        // native support promise based
        fetch('http://localhost:8000/employees/' + id, {
            method: 'DELETE'
        })
        .then(res=>{
            console.log(res);
            setShow(!show);
            // loadData();
            // let remainingEmployees =  employees.filter((e)=>e.id!==id)
            // setEmployees(remainingEmployees);
        })
    }

    // Display employee data in a bootstrap table

    // employees.map to create a list
    let employeeList = employees.map((employee, i) => {
        return (
            <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                <td><button onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger'> X </button></td>
            </tr>
        )
    })

    return (

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList}
                </tbody>
            </table>


        // {list}
    )
}
