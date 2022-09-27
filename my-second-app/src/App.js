import './App.css';
import AddCitizens from './components/AddCitizens';
import UpdateCitizen from './components/UpdateCitizen';
import ViewCitizens from './components/ViewCitizens';

function App() {
  return (
    <div>
      <AddCitizens></AddCitizens>
      <hr/>
      <ViewCitizens></ViewCitizens>
      <hr/>
      <UpdateCitizen></UpdateCitizen>
    </div>
  );
}

export default App;
