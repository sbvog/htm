import React from "react";
import {Link} from "react-router-dom";

function Nivel4() {
    return(
        <div id='CompVideo2'>
            <div className='canva'>
                <h3 className='text-justify'> O primeiro 'robô'</h3>

                <img src={require('./imgs/karel.jpg')} alt='foto de um ciborgue dos filmes' className='p-2' width='500vh'/>

                <img src={require('./imgs/karelrobot.png')} alt='foto do teatro' width='500vh' className='p-2'/>
                <p className='text-justify text-wrap text-white'>O termo 'robô' foi utilizado pela primeira vez numa peça publicada pelo checo Karel Čapek in 1921. Era uma sátira onde os robôs eram seres biologicamente manufacturados que realizavam todo o tipo de trabalho indesejado. De acordo com Čapek, a palavra foi criada pelo seu irmão Josef da palavra 'robota', que significa 'trabalho forçado'.
                </p>
            </div>

        </div>
    )
}

export default  Nivel4;