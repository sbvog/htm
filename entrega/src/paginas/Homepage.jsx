import React from 'react';
import './Homepage.css';
import porta from './porta.png';
function Homepage() {
    return(

        <div id='container' className='text-center'>
            <div id='titulo'>
                <h2 className='text-white'>Genética e Robótica</h2>
              <p/>
            </div>
        <div id='flex-parent' className='d-flex justify-center'>
        <a href='Passado'>
            <div id='porta1 flex-child' className='text-center w-50 h-900 bg-primary'>
                <img id='imagem' alt='imagem da porta' src={porta}/>
                <p className='text-center text-white'>Passado</p>
            </div>
        </a>
        <a href='Presente'>
            <div id='porta2 flex-child' className='w-50 h-500 bg-primary'>
                <img id='imagem' alt='imagem da porta' src={porta}/>
                <p className='text-white'>Presente</p>
            </div>
        </a>
        <a href='Futuro'>
            <div id='porta3 flex-child' className='w-50 h-500 bg-primary'>
                <img id='imagem' alt='imagem da porta' src={porta}/>
                <p className='text-center text-white'>Futuro</p>
            </div>
        </a>
        </div>
        </div>
    )
}


export default Homepage;