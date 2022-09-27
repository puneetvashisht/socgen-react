
import { useState } from 'react';
import AddEmployee from './AddEmployee';
import './App.css';
// import Message from './Message';
// import Badge from './Badge';
import Card from './Card';
import Dropdown from './Dropdown';
import ViewEmployees from './ViewEmployees';
import ViewEmployeesWithClass from './ViewEmployeesWithClass';
// import Parent from './Parent';

function App() {

  const [courses, setCourses] = useState([
    {title: 'Angular', summary: 'Framework from google!'},
    {title: 'React', summary: 'Library from fb!'},
    {title: 'Ember', summary: 'Framework open-source!'},
    {title: 'NodeJS', summary: 'Back-end stuff in JS!'},
  ])

  let courseList = courses.map((course, i)=> {
    return <Card key={i} title={course.title}/>
  })

  console.log(courseList);

  return (
    <div className="container">
      {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
      <div className="row">
      {/* {courseList} */}
      {/* <Dropdown></Dropdown>
       */}

       <AddEmployee></AddEmployee>
       <hr/>
       <ViewEmployees></ViewEmployees>
       {/* <ViewEmployeesWithClass></ViewEmployeesWithClass> */}
      </div>

  
      
    </div>
  );
}

export default App;
