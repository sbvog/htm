import React from 'react';
import './Homepage.css'

function Futuro() {
    return(
        <div id='container' className='flexy'>
    <div className='logo'>
        <img src={require('./LogoFuturo.jpeg')} width='500em' alt='logo do futuro'/>
    </div>
    <div id='entrevista1'>
        <a href='https://youtu.be/JvssXlX86ZQ' className='text-white text-decoration-none' target='_blank'>Episódio 1</a>


    </div>
            <div id='entrevista2'> </div>
            <a href='https://www.youtube.com/watch?v=6oEK6BI0EKM'  className='text-decoration-none text-white' target='_blank'>Episódio 2</a>
            <div id='entrevista3'>
                <a href='https://www.youtube.com/watch?v=Xyt8cFOH4Lg' target='_blank' className='text-white text-decoration-none'>Episódio 3</a>
            </div>
<br/><br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}


export default Futuro;