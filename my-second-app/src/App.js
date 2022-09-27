import './App.css';
import AddCitizens from './components/AddCitizens';
import UpdateCitizen from './components/UpdateCitizen';
import ViewCitizens from './components/ViewCitizens';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  return (
    <div>
      <ProgressBar now={10} />;
      <AddCitizens></AddCitizens>
      <hr/>
      <ViewCitizens></ViewCitizens>
      <hr/>
      <UpdateCitizen></UpdateCitizen>
    </div>
  );
}

export default App;
