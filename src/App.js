// import logo from './logo.svg';
import './App.css';
import Quizzapp from './components/quizzapp';
import Quizzapp2 from './components/quizzapp2';
import Qquizzapp3 from './components/qquizzapp3';
import data from './components/resources/resource';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Quizzapp/>}/ >
        <Route path='/app' element={<Quizzapp2 anmol={data}/>}/>
        <Route path='/result' element={<Qquizzapp3/>} />
      </Routes>
   
  );
}

export default App;
