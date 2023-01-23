import React from 'react';
import './Homepage.css'
import Nivel1 from "../components/Nivel1";
import Nivel2 from "../components/Nivel2";
import Nivel3 from "../components/Nivel3";
import Nivel4 from "../components/Nivel4";
import {Route, Router, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import Presente from "./Presente";
import Futuro from "./Futuro";
function Passado() {
    return(
        <div id='container m-50'>
            <div id='titulo' className='pt'>
                <h2 className='text-white text-muted'>O ANTES</h2>

            </div>
            <Nivel3/>
            <Nivel4/>
            <Nivel2/>
            <Nivel1/>
<br/><br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    )
}


export default Passado;