import React from 'react';
import './App.css';
import Homepage from './paginas/Homepage';
import Passado from './paginas/Passado';
import Presente from './paginas/Presente';
import Futuro from './paginas/Futuro';
import Creditos from './components/creditos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nivel1 from "./components/Nivel1";
import Nivel2 from "./components/Nivel2";
import Nivel3 from "./components/Nivel3";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Passado' element={<Passado/>}/>
          <Route path='/Presente' element={<Presente/>}/>
          <Route path='/Futuro' element={<Futuro/>}/>
            <Route path='/nivel1' element={<Nivel1/>}/>
            <Route path='/nivel2' element={<Nivel2/>}/>
            <Route path='/nivel3' element={<Nivel3/>}/>

        </Routes>
      </Router>
        <Creditos/>

    </div>
  );
}

export default App;
