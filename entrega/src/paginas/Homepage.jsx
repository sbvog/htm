import React from 'react';
import './Homepage.css';
import porta from './porta.png';
function Homepage() {
    return(

        <div id='container' className='flexy'>
            <div id='titulo' className='pt-5'>
                <h2 className='text-muted'>PÊNDULO</h2>

            </div>
        <div id='flex-parent' className=' justify-center'>

            <div id='porta1 flex-child' className='text-center w-50 h-900 '>
                <a href='Passado'>
                <img className='imagem' alt='imagem da porta' src={porta} width='300vh'/>
                <p className='text-center text-white'>O ANTES</p>
                </a>
            </div>


            <div id='porta2 flex-child' className='w-50 h-500 '>
                <a href='Presente'>
                <img className='imagem' alt='imagem da porta' src={porta} width='300vh'/>
                <p className='text-white'>O AGORA</p>
                </a>

            </div>
            <div id='porta3 flex-child' className='w-50 h-500'>
                <a href='Futuro'>

                <img className='imagem' alt='imagem da porta' src={porta} width='300vh'/>
                <p className='text-center text-white'>O AMANHÃ</p>
                </a>

            </div>
        </div>
        </div>
    )
}


export default Homepage;