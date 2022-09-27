import React, { Component } from 'react'

export default class ViewEmployeesWithClass extends Component {
    constructor() {
        super();
        console.log('In constructor');
        this.state = { employees: [] }
    }
    // @Deprecated
    // componentWillMount(){
    //     console.log('In componentWillMount');
    // }

    componentDidMount() {
        console.log('In componentDidMount');
        fetch('http://localhost:8000/employees')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ employees: data })
            })
    }

    deleteEmployee(id) {

        fetch('http://localhost:8000/employees/' + id, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res);
                // loadData();
                let remainingEmployees = this.state.employees.filter((e) => e.id !== id)
                this.setState({employees: remainingEmployees});
            })
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState);
    //     if(nextState.employees.length == 7){
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log('In render', this.state.employees);

        let employeeList = this.state.employees.map((employee, i) => {
            return (
                <tr key={employee.id}>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
                    <td><button onClick={this.deleteEmployee.bind(this, employee.id)} className='btn btn-danger'> X </button></td>
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

        )
    }
}
