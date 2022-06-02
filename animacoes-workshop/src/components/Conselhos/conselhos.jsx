import React,{useState} from "react";
import './conselhos.css'

const Conselhos = () => {

    const [animarLinha, setAnimarLinha] = useState("")
    const [animarCirculo, setAnimarCirculo] = useState("")

    window.addEventListener('scroll', () => {
        const vendoScroll = (document.documentElement.scrollTop + document.body.scrollTop)

        if (vendoScroll >= 4200){
            setAnimarLinha("animarConselho")
            setAnimarCirculo("animarCirculo")
        } else {
            setAnimarLinha("")
        }
    })

    return(
        <div className="conselhos-bg">
            <div className="conselhosHeader">

            <h2>Ficou interessado ou perdido?</h2>
            <p>Calma! Aqui tem algumas informações bem importantes</p>
            </div>

            <svg className={`conselhosLine `} width="1262" height="1864" viewBox="0 0 1262 1864" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={`animarCirculo1 ${animarCirculo}`} d="M859 1629C859 1757.72 756.881 1862 631 1862C505.119 1862 403 1757.72 403 1629C403 1500.28 505.119 1396 631 1396C756.881 1396 859 1500.28 859 1629Z" stroke="#A5A5A5" stroke-width="4"/>
<path className={ ` ${animarLinha}`} d="M627.75 0V135H3V529.5H627.75V683H1259.5V1071H627.75V1394.5" stroke="#A5A5A5" stroke-width="5"/>
</svg>
<div className="conselhos">
<h2 className="pontos">Pontos importantes:</h2>
            <p>Nunca analise a animação inteira, sempre um pedaço de cada vez;</p> 
            <p>Nem todo site precisa ter animação, e ta tudo bem!</p>  
            <p>É tão desafiador quanto apaixonante;</p>  
            <p>Assim como tudo na programação, depois de praticar, fica natural;</p>            
           </div>
           <div className="sites">
            <h2 >Links para ajudar</h2>
            <a href="https://100dayscss.com/">100 days css challenge</a>
            <a href="https://dribbble.com/">Dribbble</a>
            <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
            <a href="https://codepen.io/">Code Pen</a>
           </div>

        </div>
    )
}

export default Conselhos;