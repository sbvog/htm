import React from 'react';
import './Nivel1.css';

function Creditos () {
    return(
        <div className='container'>
            <p className='text-white'>
                Trabalho desenvolvido por:
            </p>
                <br/>

                <ul className='text-muted'>
                    <li>Catarina Gomes 103060</li>
                    <li> Lara Mendes 102905</li>
                    <li> Renata Guedes 104958</li>
                    <li>Rita Santos 103122</li>
                    <li>  Sofia Bermudez 103242</li>
                </ul>

<p className='text-white'>Referências Bibliográficas</p>
            <ul>
                <li className='hoverli'>1.Berners-Lee, T. (2000, November 7). Weaving the Web. In The Original Design and Ultimate Destiny of the World Wide Web. Harper Business. https://doi.org/10.1604/9780062515872</li>
                <li className='hoverli'>2.Crowe, S. (2015, March 6). Watch the History of Robots in 10 Minutes - Robotics Business Review. Robotics Business Review. Retrieved January 23, 2023, from https://www.roboticsbusinessreview.com/rbr/watch_the_history_of_robots_in_10_minutes/</li>
                <li className='hoverli'>3. Glaser, Horst Albert and Rossbach, Sabine: The Artificial Human, Frankfurt/M., Bern, New York 2011 "The Artificial Human. A Tragical History", ebook "The Artificial Humans. A Real History of Robots, Androids, Replicants, Cyborgs, Clones and all the rest"</li>
                <li className='hoverli'>4."Cyborgs: A Personal Story" – Kevin Warwick TEDx talk at Coventry University (2016)</li>
                <li className='hoverli'>5.Berners-Lee, T. (n.d.). Long Live the Web: A Call for Continued Open Standards and Neutrality. Scientific American. Retrieved January 23, 2023, from https://www.scientificamerican.com/article/long-live-the-web/</li>
<li className='hoverli'>6.Fischetti, M. (n.d.). The World Wide Web Became Free 20 Years Ago Today. Scientific American Blog Network. Retrieved January 23, 2023, from https://blogs.scientificamerican.com/observations/the-world-wide-web-became-free-20-years-ago-today/</li>

            </ul>
        </div>
    )
}


export default Creditos;