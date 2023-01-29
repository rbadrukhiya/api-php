import logo from './logo.svg';
import './App.css';
import Insert from './insert';
import { Routes, Route } from "react-router-dom"
import Show from './show';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './edit';


function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={ <Insert/> } />
        <Route path="/insert" element={ <Insert/> } />
        <Route path="/show" element={ <Show/> } />
        <Route path="/edit/:id" element={ <Edit/> } />

      </Routes>
    {/* <Insert/> */}
    </div>
    
  );
}

export default App;
