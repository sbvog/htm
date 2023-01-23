import React from 'react';
import './Nivel1.css';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect/dist/core';


function Nivel1() {
    return(
        <div id='CompNivel1' className='flexy'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h3 className='pt-5'>Uma escolha discreta que mudou o mundo </h3>

            <div className='canva'>
                <img src={require('./imgs/tim.jpg')} width='500vh' alt='tim'/>
                <p className='text-justify pt-3 text-white mx-auto'>O ano é 1989, Tim Berners Lee trabalha como cientista na CERN, e cria a World Wide Web.
                    Não só cria a arquitetura da internet como a acedemos hoje, mas também decide juntamente com a CERN de tornar a tecnologia domínio público,  acreditando que o desenvolvimento de software de centenas de entusiastas na altura e milhões de pessoas no futuro sempre estariam um passo à frente de qualquer empresa que tentaria controlar a Internet ou obrigar as pessoas a pagar.</p>
                <p className='text-justify text-white mx-auto'> A decisão veio numa altura muito tensa que poderia ter arruinado o principal objetivo da Web de se tornar numa plataforam ubíqua de comunicação aberta.</p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <img src={require('./imgs/browser.png')} width='600vh' alt='tim'/>

                <a href='http://info.cern.ch/hypertext/WWW/TheProject.html' target='_blank' className=' pt-3 text-decoration-none text-muted'>Imagem do Primeiro browser criado.
                    Clique aqui para visitar</a>

            <br/>
            <br/>
            <br/>
            <br/>
            <div className='flex-direction-row p-5'>
                <img src={require('./imgs/licemse1.png')} width='300vh' alt='tim' className='m-2'/>
                <img src={require('./imgs/licemse2.png')} width='300vh' alt='tim'/>
                <p className='text-white mx-auto pt-2'>"I was accosted in the corridors…. I listened carefully to people’s concerns. I also sweated anxiously behind my calm exterior…. On April 30, Robert [Cailliau] and I received a declaration, with a CERN stamp on it, signed by one of the directors, saying that CERN agreed to allow anybody to use the Web protocol and code free of charge, to create a server or browser, to give it away or sell it, without any royalty or other constraint. Whew!”</p>
                <p className='text-muted mx-auto pt-1 font-italic'>Tim Berners Lee, 1999, no livro 'Weaving the Web'</p>
            </div>
            </div>

            <div className='choices'>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Link to='/'><button className='escolha1 text-white border-white'> Viajar no Tempo</button></Link>
            </div>


            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}


export default Nivel1;