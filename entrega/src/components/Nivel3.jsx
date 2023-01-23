import React from 'react';
import {Link} from "react-router-dom";
import Nivel4 from "./Nivel4";
import Nivel2 from "./Nivel2";
import Nivel1 from "./Nivel1";

function Nivel3() {
    return(
        <div id='CompNivel3' className='flexy text-justify'>
            <br/>
            <br/>
            <h3 className=' pt-5'> Pombos Mecânicos </h3>
            <div className='canva'>
                <img src={require('./imgs/pigeon.jpg')} width='500vh' alt='logo do futuro'/>

                <p className='text-justify text-white p-5 mx-auto'>
                    O primeiro robô documentado na história da humanidade foi no 4º século A.C., quando o matemático Archytas de Tarentum desenhou um pássaro mecânico designado de "O Pombo", que era alimentado a carvão. Utilizando a referência em Íliade de Homero, Aristóteles especulou no seu Política que "uma automata" um dia haveria de trazer igualdade humana tornando-se possível a abolição da escravatura.
                    "Só há uma condição em que podemos onde chefes não precisam de subordinados, e donos não precisarem de escravos. Esta condição seria que cada instrumento faria o seu próprio trabalho, através de um comando ou antecipação inteligente".
                </p>
                <p className='text-justify text-white p-5 mx-auto'> Existe uma conexão entre a robótica  e a escravatura, que vai também marcar as diversas abordagens futuras à robótica e a genética. A primeira, como defende Aristóteles, diz-nos que se fosse possível dar ordens a um objeto, que seria o final do trabalho forçado. Para além de isto facilmente criar uma paralelismo ao AGORA onde inserimos 'prompts' a uma rede neuronal de machine learning e ela faz a tarefa por nós, apenas ainda não pela via de antecipação inteligente ( ou será que já?).</p>
            </div>


        </div>
    )
}


export default Nivel3;