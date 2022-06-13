import React,{useState} from "react";
import './conselhos.css'

const Conselhos = () => {

    const [animarLinha, setAnimarLinha] = useState("")

    window.addEventListener('scroll', () => {
        const vendoScroll = (document.documentElement.scrollTop + document.body.scrollTop)

        vendoScroll >= 4200 ? setAnimarLinha("animarConselho") : setAnimarLinha("")
    })

    return(
        <div className="conselhos-bg">
            <div className="conselhosHeader">

            <h2>Ficou interessado ou perdido?</h2>
            <p>Calma! Aqui tem algumas informações bem importantes</p>
            </div>

            <svg className={`conselhosLine1440 `} width="1262" height="1864" viewBox="0 0 1262 1864" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={ ` ${animarLinha}`} d="M627.75 0V135H3V529.5H627.75V683H1259.5V1071H627.75V1394.5" stroke="#A5A5A5" stroke-width="5"/>
</svg>
{/* <svg className="conselhosLine2560" width="2000" height="2086" viewBox="0 0 2000 2086" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={ ` ${animarLinha}`} d="M1139.63 0V201.943H3V792.067H1139.63V1021.68H2289V1602.08H1139.63V2086" stroke="#A5A5A5" stroke-width="5"/>
</svg>
<svg className="conselhosLine1024" width="700" height="1222" viewBox="0 0 700 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={ ` ${animarLinha}`} d="M452.979 0V118.3H3V464.001H452.979V598.513H908V938.517H452.979V1222" stroke="#A5A5A5" stroke-width="5"/>
</svg>
<svg className="conselhosLine768" width="500" height="1222" viewBox="0 0 500 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={ ` ${animarLinha}`} d="M330.167 0V118.3H3V464.001H330.167V598.513H661V938.517H330.167V1222" stroke="#A5A5A5" stroke-width="5"/>
</svg>
<svg className="conselhosLine425" width="364" height="1207" viewBox="0 0 364 1207" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={ ` ${animarLinha}`} d="M181.003 0V116.848H3V458.305H181.003V591.166H361V926.997H181.003V1207" stroke="#A5A5A5" stroke-width="5"/>
</svg> */}


<div className="conselhosContainer">
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
        </div>
    )
}

export default Conselhos;