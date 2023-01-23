import React from 'react';
import {Link} from "react-router-dom";

function Nivel2() {
    return(
        <div id='CompNivel2' className='flexy'>
            <div className='canva p-3'>
                <br/>                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h3 className=' p-5 mx-auto'> Extensão do ser humano</h3>

                <img src={require('./imgs/ciborgue.jpg')} alt='foto de um ciborgue dos filmes'  className='p-2' width='500vh'/>
                <p className='text-muted d-small'><small>Fonte: gremlin/iStock</small></p>
                <h6 className='text-white  p-2 mx-auto'>O que um ciborgue?</h6>
                <p className=' text-justify text-white mx-auto'> É a junção de cibernética e organismo, um ser simultaneamente orgânico e mecânico.</p>
                <p className=' text-justify text-white  mx-auto'>No "Cyborg Manifesto", de Donna Haraway, o conceito de ciborgue representa a rejeição de limitações rígidas, nomeadamente aquelas que separam o animal da máquina.</p>
                <img src={require('./imgs/warwick.jpg')} alt='foto do warick' width='500vh' className='p-2'/>
                <p className=' text-justify text-white pt-5 mx-auto'>Kevin Warwick, um cientista que levantou muitas questões éticas sobre as modificações tecnológicas nos humanos, desenvolveu o Project Cyborg, um projeto que implicou, num primeiro passo, um transmissor ser implantado por debaixa da pele do cientista, que foi utilizado para portas, luzes, aquecedores e outros dispositivos controlados pelo computador, baseados em proximidade. O objetivo principal seria testar o que o corpo humano aceitaria e qual fácil seria aceitar um sinal do microprocessor.
                </p> <p className=' text-justify text-white pt-1'> Warwick apresenta-se como um grande investidor na tecnologia como extensão do humano, e não acredita tanto na materialização de robótica como algo externo ao humano , como se de outra entidadade se tratasse. Para Warwick, a tecnologia vai ser necessária para nos proteger das máquinas, e para nos libertar das nossas próprias limitações orgânicas, que para ele são, claramente inferiores à da máquina.

            </p>
            </div>


        </div>
    )
}


export default Nivel2;