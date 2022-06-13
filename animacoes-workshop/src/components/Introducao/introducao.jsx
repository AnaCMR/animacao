import React, {useState} from "react";
import CuteDollIdea from "../SVG-CuteDoll/cutedollIdea";
import './introducao.css';

const Introducao = () => {
    const chave1 = "{"
    const chave2 = "}"
    const [scroll, setScroll] = useState()
    const [animationLine, setAnimationLine] = useState('')
    const [animationFill1, setAnimationFill1] = useState('')
    const [animationFill2, setAnimationFill2] = useState('')
    const [animationFill3, setAnimationFill3] = useState('')
    const [animationFill4, setAnimationFill4] = useState('')
    const [animationFill5, setAnimationFill5] = useState('')
    const [keyframeAnimation1, setKeyframeAnimation1] = useState('')
    const [keyframeAnimation2, setKeyframeAnimation2] = useState('')
    const [imgFogueteAnimate, setImgFogueteAnimate] = useState('')


window.addEventListener('scroll', () => {

    setScroll(document.documentElement.scrollTop + document.body.scrollTop)

    if(scroll >= 190) {
        setAnimationLine('line1-animation')
    } else {
        setAnimationLine('')
    }

    if(scroll >= 600){
        setAnimationFill1('numero1')
        setKeyframeAnimation1('keyframeAnimation1')
        setKeyframeAnimation2('keyframeAnimation2')
    } else {
        setAnimationFill1('')
        setKeyframeAnimation1('')
        setKeyframeAnimation2('')
    }

    if(scroll >= 1000){
        setAnimationFill2('numero2')
    } else {
        setAnimationFill2('')
    }

    if(scroll >= 1100){
        setImgFogueteAnimate('imgFogueteAnimate')
    } else {
        setImgFogueteAnimate('')
    }

    if(scroll >= 1250){
        setAnimationFill3('numero3')
    } else {
        setAnimationFill3('')
    }
    if(scroll >= 1650){
        setAnimationFill4('numero4')
    } else {
        setAnimationFill4('')
    }
    if(scroll >= 2000){
        setAnimationFill5('numero5')
    } else {
        setAnimationFill5('')
    }

})
    return(

        <div className="backgroundContent">
            <div className="containerzinho">

            <div className="containerBolinhas">
            <div className="bolinha1"></div>
            <div className="bolinha2"></div>
            <div className="bolinha3"></div>
            </div>
            
            <div className="containerTexto">

            <h2 className="title1">O que posso utilizar para fazer animações?</h2>
            <svg className={`linha1 ${animationLine}`} width="656" height="4" viewBox="0 0 656 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M656 2H0" stroke="white" stroke-width="4"/>
</svg>
            
        </div>
        </div>
<div className="conteudo1">
        <svg className="numeros numero1" width="183" height="267" viewBox="0 0 183 267" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.53861 73L30.0394 106.816L80.5 61V141V216.5H17.5014L17.5011 265.5H181L181 216.5H125.5V1.5H71.501L2.53861 73Z" stroke="#F41D91" stroke-width="3"/>
</svg>
<svg  className={`numeros numero1-fill ${animationFill1}-fill-animation `} width="177" height="271" viewBox="0 0 177 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M163 269L174.5 243L147 269L174.5 228.5L133 269L163 220L121 269L147 220L108 269L133 220L96 269L121 220L86.5 269L121 202.5L75.5 269L121 184.5L63.5 269L121 164L55.5 269L121 144L73.5 214.5M73.5 220L43.5 269L63.5 220M73.5 196.5L121 136.5L73.5 184.5M34 269L55.5 220M73.5 173.5L121 127L73.5 164L121 115L73.5 153.5M25.5 269L49.5 220L13.5 269L34 220L13.5 252.5V243L19.5 231.5L25.5 220M73.5 144L121 105.5L73.5 136.5L121 92.5L73.5 127L121 78.5L73.5 115L121 62.5L73.5 105.5L121 51L73.5 92.5L121 37.5L73.5 78.5L121 24.5L73.5 62.5M73.5 62.5L121 15M73.5 62.5L121 2M73.5 62.5L108 2M73.5 62.5L96 2M73.5 62.5L86.5 2L63.5 71M75.5 2L55.5 78.5L63.5 2L43.5 92.5L49.5 24.5L34 105.5M41.5 28L31 105.5L34 37.5L24.5 109L26.5 44L17 102V56L12 94.5M10 62.5L7.5 91L3 71" stroke="#F41D91" stroke-width="5"/>
</svg>
<div className="container-conteudo1">
        <h1>Keyframe!</h1>
        <p>Keyframes são utlizados para criar a animação e a estrutura dele é assim:</p>
        <p> <span className={`${keyframeAnimation1}`}>@keyframes</span> nomeAnimacao {chave1}  </p>
    <p>0%  <span className={`${keyframeAnimation2}`}>(from) </span>{chave1} </p>
        <p> Como vai estar quando começar</p>
        <p> {chave2} </p>
       <p> 100% <span className={`${keyframeAnimation2}`}>(to)</span> {chave1} </p>
            <p>    Como vai estar quando terminar</p>
    <p> {chave2} </p>
    <p>{chave2} </p>
    </div>
    </div>
<img className={`imgFoguete ${imgFogueteAnimate}`} src="./foguete.png"></img>
    <div className="conteudo2">
    <svg className="numeros numero2" width="180" height="270" viewBox="0 0 180 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.0002 98.0001H4.5002C4.5002 -4.39993 80 3.49998 110.5 3.50005C158.191 3.50016 174 47.8334 177 70.0001V113.5C177 137.5 104 196.5 67.5003 223H177V267H10H3.22607V245.5C3.61913 228.004 17.9135 203.787 29.5002 188.5L110.5 127.5C124 102 140.8 51.0001 100 51.0001C59.2002 51.0001 51.6669 82.3335 53.0002 98.0001Z" stroke="#F41D91" stroke-width="5"/>
</svg>
<svg className={`numeros numero2-fill ${animationFill2}-fill-animation `} width="179" height="270" viewBox="0 0 179 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 94.5L9 78.5L30.5 94.5L9 63L43 94.5L9 49.5L50.5 94.5L18 41.5L50.5 78.5L23.5 31.5L58.5 74L30.5 25.5L64 63L38 16.5L73 56L50.5 10L79 49.5L58.5 3L86.5 49.5L73 3L96 49.5L86.5 3L105 49.5L96 3L114 49.5M114 49.5L105 3H114V49.5ZM114 49.5L124 3M135 3L114 56L142 10L124 56L150 16.5L124 63L159 25.5L128.5 69.5L164.5 31.5L128.5 78.5L170 41.5L175.5 49.5L128.5 84L175.5 63L124 94.5L175.5 74L124 106.5M124 106.5L175.5 84V99L124 106.5ZM175.5 112.5H124L175.5 126H114L164.5 137H105L159 148.5L96 144L142 156.5L79 148.5L135 166.5L73 156.5C93 163.167 132.1 176.5 128.5 176.5C124.9 176.5 84 166.833 64 162L114 184.5L50.5 166.5L105 191.5L43 176.5L96 200.5L38 184.5L86.5 208L30.5 191.5L79 216L23.5 200.5L73 222.5M73 222.5L18 208L64 227M73 222.5L2 254.5L64 227M73 222.5L9 263L86.5 222.5L23.5 267.5L96 227M64 227L9 216V227H64ZM64 227C45.6667 230.833 9 238.9 9 240.5M96 227L50.5 263M96 227L64 267.5L105 222.5L79 267.5L114 222.5L96 267.5L128.5 222.5L114 267.5L135 222.5L124 267.5L150 222.5L135 263L159 222.5L142 263L170 222.5L154.5 267.5L175.5 222.5L164.5 263L175.5 247.5" stroke="#F41D91" stroke-width="5"/>
</svg>

<div className="container-conteudo2">
<h1>Transform!</h1>
        <p>É com essa propriedade maravilhosa que nós conseguimos mudar a <span className='rotation'>rotação</span>, <span className='position'>posição</span>, <span className='escala'>escala</span> (entre outras muitas coisas) dos elementos. Segue um exemplo de como usar o transform </p>
        <p> transform: rotate(45deg) translate(200px, 300px) </p>
</div>
</div>
<div className="conteudo1">
<svg className="numeros numero3" width="295" height="290" viewBox="0 0 205 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M184 2.5H18V49.5H109.5L60 111.5V141C89.0595 122.341 170.608 141.327 139.5 208C114.588 261.394 55.9089 223.381 41.5 208L5 240.5C26.0103 255.413 82.9501 314.227 148.5 272C263.569 197.873 161.88 99.8092 136 95L184 36V2.5Z" stroke="#F41D91" stroke-width="5"/>
</svg>

<svg className={`numeros numero3-fill ${animationFill3}-fill-animation`} width="188" height="286" viewBox="0 0 188 286" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 47L12 3V47L22 3V47L30.5 3V47L39 3V47L48.5 3L45.5 47L62.5 3L54 47L71.5 3L62.5 47L83 3L71.5 47L93 3L78 50.5L103.5 3L87 47L113.5 3L93 50.5M93 50.5L126.5 3L96 50.5M93 50.5L168 32.5M96 50.5L134 3M96 50.5L145 3M96 50.5L156 3M96 50.5L168 3M96 50.5C102 50.5 146.5 25.1667 168 12.5L96 50.5ZM96 50.5L168 22.5M96 50.5L165 41.5M156 50.5L93 53.5L149 59.5L87 62.5L145 68.5H78L134 76.5L73 74L126.5 85L68 80L121 92L68 86.7395L134 100.5L62.5 92L145 110.5L54 95L156 120L48.5 100.5L165 128.5L48.5 107.5L171.5 139.5L45.5 114.5L176.5 150L48.5 124L54 133.5H45.5M113.5 144.5L182 160.5C159.833 158 116.6 153.2 121 154C125.4 154.8 163.5 164.333 182 169C161 167.167 120.5 163.6 126.5 164C132.5 164.4 169 173.5 186.5 178L134 172.5L186.5 186L134 178L186.5 197L130.5 186L186.5 208.5L126.5 197L182 219.5L124.5 206L176.5 228L121 214L171.5 236.5L113.5 219.5L165 245L110.5 228L156 252L100.5 231.5L149 259.5L87 231.5L145 265.5L78 236.5M78 236.5L134 271M78 236.5L121 276M78 236.5C86.5 250.667 104.9 279.5 110.5 281.5M78 236.5L96 281.5M87 285L73 231.5L78 285L62.5 231.5L68 285L54 228V281.5L48.5 225L42.5 276V219.5L30.5 271L35.5 219.5L22 265.5L30.5 214L12 255.5L25.5 206L3 252V231.5" stroke="#F41D91" stroke-width="5"/>
</svg>

<div className="container-conteudo1">
        <h1>Animation!</h1>
        <p>É com essa propriedade que definimos como a animação criada no keyframe vai ser executada. </p>
        <p>animation: nomeAnimacao tempoDeEfeito tipoDeEfeito delay quantidadeDeVezes oResultadoFinal </p>
    </div>
    </div>

    <div className="conteudo2">
    <svg className="numeros numero4" width="209" height="285" viewBox="0 0 209 285" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 177L121.5 3H172.5V177H206V230H172.5V282H113V230L3 227V177Z" stroke="#F41D91" stroke-width="5"/>
</svg>


<svg className={`numeros numero4-fill ${animationFill4}-fill-animation`} width="210" height="283" viewBox="0 0 210 283" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M116.5 13L139 3L105 28.5L151.5 3L96.5 41.5L168.5 3L88.5 54.5L173.5 10L77.5 69L173.5 20.5L69 81.5L173.5 32.5L61 93.5M61 93.5L173.5 41.5M61 93.5L173.5 49.5L54 104L173.5 57.5L48 114L173.5 65.5L42.5 123.5L173.5 75L116.5 104L173 84L113 114L173.5 93.5L113 123.5L173.5 104L113 132L173 111L113 141.5L173 119.5L113 151L173 128L113 159.5L173.5 137L113 166.5L173 146.5L113 172.5L173 155.5L19 224.5L173 163.5L42.5 224.5L173 172.5L54 229.5L173.5 179L77.5 229.5L189 179L96.5 229.5L204 179L113 229.5L204 187L113 239L207 195L113 250L207 205L113 261L173 234.5L113 271.5L173 243.5L113 280L173 253L128.5 280L173.5 261L145.5 280L173.5 271.5M181 229.5L207 210L195 229.5M33.5 132L113 104L28.5 146.5L105 119.5L19 155.5L96.5 132L11.5 166.5L85 146.5L2 179L77.5 159.5L2 187L69 172.5L2 198L88.5 172.5L2 210L102.5 171.5L2 220M6 224.5L108 172.5" stroke="#F41D91" stroke-width="5"/>
</svg>


<div className="container-conteudo2">
        <h1>Transition</h1>
        <p>Com o transition conseguimos suavizar efeitos, colocando um delay, uma duração e um estilo de animação</p>

        <p>transition: Propriedade duração tempoDeEfeito Delay </p>
    </div>
    </div>
    <div className="conteudo5">
    <svg className="numeros numero5" width="196" height="282" viewBox="0 0 196 282" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M178.5 58V4L36.5 3L8.5 147.5H10.5L58 155C59.6667 148.333 69.5 135 95.5 135C121.5 135 128.667 157.333 129 168.5C130.667 189.167 127.1 230.5 99.5 230.5C71.9 230.5 61.6667 204.167 60 191L3.5 198L7.09701 213.321C7.10944 213.546 7.12534 213.772 7.14464 214C8.14349 225.795 20.7499 243.969 28.9999 254C74.5999 299.6 134.667 273 159 254C219.8 193.2 184.333 130.667 159 107C138.2 86.2 91.4999 80.8333 77.4999 89.5L82.9999 58H178.5Z" stroke="#F41D91" stroke-width="5"/>
</svg>

<svg className={`numeros numero5-fill ${animationFill5}-fill-animation`} width="188" height="279" viewBox="0 0 188 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5 11L50 3L30.5 26.5L68 3L24 41L81.5 3L24 53L94 3L20 66L107 3L20 76L119.5 3L16 91L130.5 3L16 102.5L145.5 3L89.5 57L154 3L107 57L162.5 3L119.5 57L171.5 3L134 57L171.5 15.5L145.5 57L171.5 26.5L156.5 55.5L171.5 41L166 55.5M78 66L11 111.5L74 79.5L8 122L74 88L8 132L89.5 85L8 143L104 85L16 148L114 88L30.5 148L123.5 91L38 151L134 94.5L81.5 132L145.5 98L98 132L151.5 102.5L107 136L156.5 108L114 143L162.5 111.5L119.5 148L166 118.5L123.5 155.5L171.5 126.5L123.5 163.5L176 136L123.5 172L180.5 148L123.5 178L183.5 155.5L123.5 184L187 166.5L123.5 190.5L187 178L119.5 196L187 190.5L123.5 203.5M123.5 203.5L187 196M123.5 203.5H187M123.5 203.5L180.5 212.5M176 221L123.5 206.5L171.5 227.5L119.5 212.5L171.5 235.5L114 217.5L166 243.5L109.5 222L156.5 248.5L104 227.5L151.5 254.5L98 227.5M145.5 261L98 231M134 264L94 231M123.5 267L94 235.5M119.5 272L87 229M107 275L89.5 227.5M98 275L94 227.5L89.5 278.5L84 226L81.5 278.5M74 278.5L81.5 229L64.5 275L74 227.5L58.5 272L67.3899 221M68 217.5L67.3899 221M68 217.5L38 264M68 217.5L30.5 261M50 267L67.3899 221M26 252L64.5 217.5L20 248.5L62 211.5M62 211.5L16 243.5M62 211.5L11 235.5M62 211.5L8 226M62 211.5L4 217.5M4 211.5L62 203.5H1L55 196" stroke="#F41D91" stroke-width="5"/>
</svg>


<div className="container-conteudo5">
        <h1>JavaScript (ou React)!</h1>
        <p>Muita das vezes precisamos de uma lógica para manipular os elementos que vão conter as nossas animações </p>
        <p>Por isso, é muito importante aprender a mexer com Scroll ou fazer bom uso de bibliotecas que vão melhorar as nossas transições, por exemplo. </p>
    </div>
    
<CuteDollIdea/>

</div> 

        </div>
        
    )
}

export default Introducao;
