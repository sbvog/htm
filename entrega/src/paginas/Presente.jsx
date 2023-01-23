import React from 'react';
import './Homepage.css'
function Presente() {
    return(
        <div id='container'>
            <div id='titulo' className='p-5'>
                <h2 className='text-muted'>O AGORA</h2>

            </div>
    <a href='https://www.youtube.com/watch?v=u5QwXjHUspM' target='_blank'>
        <img src={require('./presente.png')} width='500vh'/>
    </a>

            <br/>            <br/>
            <br/>
            <br/>
            <br/>
            <br/>            <br/>
            <br/>

            <br/>

        </div>
    )
}


export default Presente;