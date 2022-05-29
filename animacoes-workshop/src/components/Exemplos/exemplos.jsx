import React, { useState } from "react";
import "./exemplos.css"

const Exemplo = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isOpened2, setIsOpened2] = useState(false)
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [translate1, setTranslate1] = useState ("-300px")
    const [translate2, setTranslate2] = useState ("150px")
    const [translate3, setTranslate3] = useState ("-150px")
    const [translate4, setTranslate4] = useState ("300px")
    const [dayValue, setDayValue] = useState( )
    const [animationValue, setAnimationValue] = useState( )
    console.log(dayValue)
    console.log(animationValue)



    const classActive = active ? "changePageActive" : "changePage"
    const classActive2 = active2 ? "changePageActive" : "changePage"
    const classActive3 = active3 ? "changePageActive" : "changePage"
    const classActive4 = active4 ? "changePageActive" : "changePage"

    const classActiveCard = active ? "menuButtonActive" : translate1
    const classActive2Card = active2 ? "arrowButtonActive" : translate2
    const classActive3Card = active3 ? "iconsActive" : translate3
    const classActive4Card = active4 ? "toggleButtonsActive" : translate4

    const cssOpened = isOpened ? "menuOpened" : "menuClosed"
   const line1Opened = isOpened ? "line1Animation" : ""
   const line2Opened = isOpened ? "line2Animation" : ""
   const line3Opened = isOpened ? "line3Animation" : ""
    const cssOpened2 = isOpened2 ? "menuOpened2" : "menuClosed"

    return (
        
        <div className="exemplos-bg">
            <div className="containerMoove">
        <div className="part1"></div>
        <div className="part2"></div>
        <div className="part3"></div>
        <div className="part4"></div>
        <div className="part5"></div>
        </div>
  
       
        <h2 className="title2">MICROANIMAÇÕES</h2>

        <div className="textContainer">
        <p>As microanimações são animações com estilo mais profissional!</p>
        <p>São animações que muitas vezes nem percebemos que estão lá mas que fazem total diferença </p>
        
        <br/>
        <br/>

        <p className="exemplos">Vamos ver alguns exemplos?</p>
        </div>
        <div className="exemplosContainer">
        <svg className="leftArrow"
        onClick={() => {
            if(active){
                setActive(false)
                setActive2(false)
                setActive3(false)
                setActive4(true)
                setTranslate4("-300px")
            } else if(active2){
                setActive(true)
                setActive2(false)
                setActive3(false)
                setActive4(false)
            }
            else if(active3){
                setActive(false)
                setActive2(true)
                setActive3(false)
                setActive4(false)
            } else {
                setActive(false)
                setActive2(false)
                setActive3(true)
                setActive4(false)
            }
        
        }} width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1787 12.5607C12.7645 11.9749 12.7645 11.0251 12.1787 10.4393L2.63274 0.893398C2.04696 0.307612 1.09721 0.307612 0.511424 0.893398C-0.0743629 1.47918 -0.0743629 2.42893 0.511424 3.01472L8.9967 11.5L0.511424 19.9853C-0.0743629 20.5711 -0.0743629 21.5208 0.511424 22.1066C1.09721 22.6924 2.04696 22.6924 2.63274 22.1066L12.1787 12.5607ZM8.88196 13H11.118V10H8.88196V13Z" fill="#179cc9"/>
</svg>


        <div className={`menuContainer`} style={{transform: `translateX(${classActiveCard})`}}>
            <div className="menuContainer2">
        <div onClick={() => 
            setIsOpened(!isOpened)
        } className="lineContainer comAnimacao">
            
        <div className={`line1 ${line1Opened}`}></div>
            <div className={`line2 ${line2Opened}`}></div>
            <div className={`line3 ${line3Opened}`}></div>
            
           
        </div>
        <div className={cssOpened}> 
            <ul>
                <li>
                    item1

                </li>
                <li>
                    item2
                    
                </li>
            </ul>
            </div>
            </div>
            <div className="menuContainer2">
        <div onClick={() => setIsOpened2(!isOpened2)} className="lineContainer comAnimacao">
            
        <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
           
        </div>
        <div className={cssOpened2}> 
            <ul>
                <li>
                    item1
                </li>
                <li>
                    item2
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div className={`menuContainer`} style={{transform: `translateX(${classActive2Card})`}}>
       
        <spam className="spam-click comAnimacaoSeta">Veja abaixo <svg className="seta setaAnimada" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
<spam className="spam-click semAnimacao">Veja abaixo <svg className="seta" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
</div>
<div className={`menuContainer`} style={{transform: `translateX(${classActive3Card})`}} >
<div className="loading"></div>
<div className="download"><svg width="44" height="53" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9393 32.0607C11.5251 32.6464 12.4749 32.6464 13.0607 32.0607L22.6066 22.5147C23.1924 21.9289 23.1924 20.9792 22.6066 20.3934C22.0208 19.8076 21.0711 19.8076 20.4853 20.3934L12 28.8787L3.51472 20.3934C2.92893 19.8076 1.97918 19.8076 1.3934 20.3934C0.807612 20.9792 0.807612 21.9289 1.3934 22.5147L10.9393 32.0607ZM10.5 0L10.5 31H13.5L13.5 0L10.5 0Z" fill="#222222"/>
</svg>


</div>
<div className="loadingStatus"><div className="loadingLine"></div></div>
     </div>
<div className="menuContainer" style={{transform: `translateX(${classActive4Card})`}}>
        <input type="checkbox" onChange={({target}) => setDayValue(target.value)} className="day"/>
        <input type="checkbox" onChange={({target}) => setAnimationValue(target.value)} className="onOff"/>
</div>
<svg className="rightArrow" 
onClick={() => {
    if(active){
        setActive(false)
        setActive2(true)
        setActive3(false)
        setActive4(false)
    } else if(active2){
        setActive(false)
        setActive2(false)
        setActive3(true)
        setActive4(false)
    }
    else if(active3){
        setActive(false)
        setActive2(false)
        setActive3(false)
        setActive4(true)
    } else {
        setActive(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }

}} width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1787 12.5607C12.7645 11.9749 12.7645 11.0251 12.1787 10.4393L2.63274 0.893398C2.04696 0.307612 1.09721 0.307612 0.511424 0.893398C-0.0743629 1.47918 -0.0743629 2.42893 0.511424 3.01472L8.9967 11.5L0.511424 19.9853C-0.0743629 20.5711 -0.0743629 21.5208 0.511424 22.1066C1.09721 22.6924 2.04696 22.6924 2.63274 22.1066L12.1787 12.5607ZM8.88196 13H11.118V10H8.88196V13Z" fill="#179cc9"/>
</svg>
</div>
<div className="navigationContainer">
            <div onClick={() => {
                setActive(true)
                setActive2(false)
                setActive3(false)
                    setActive4(false)}} className={classActive}></div>
                <div  onClick={() => {
                    setActive2(true)
                    setActive(false)
                    setActive3(false)
                    setActive4(false)
                    }} className={classActive2}></div>
           
        <div onClick={() => {
    setActive(false)
    setActive2(false)
    setActive3(true)
                    setActive4(false)}} className={classActive3}></div>
                <div  onClick={() => {
                    setActive2(false)
                    setActive(false)
                    setActive3(false)
                    setActive4(true)
                }} className={classActive4  }></div>
                </div>
           
        
{/* 

























        <h1> Mas porque é importante usar animações?</h1>
        
        
        <p> Porque elas estão em todo lugar, mesmo que a gente não perceba.</p>
        <p> Essas são as chamadas microanimações:</p>

        <div className="telinhaBG">
            <div className="telinhaContainer">
            <div className="telinhaAnimada">
                <div className="menu"> 
                    <div className="menuIcon" onClick={() => setIsOpened(!isOpened)} width="91" height="61" viewBox="0 0 91 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    </div>
                   {/* <div className={classOpened}>
                    <ul>
                        <li>
                            item1
                        </li>
                        <li>
                        item2
                        </li>
                    </ul>
                    </div> 
                </div>
                
                <spam className="spam-click">Veja abaixo <svg className="seta setaAnimada" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="black" stroke-width="10"/>
</svg>
</spam>

                <div className="foto-carrossel">
            <Fotos animado={true}/>
            </div>
<spam className="buttonChange corAnimada">Mudando de cor</spam>
            </div>
            </div>
            







        <div className="div-container-click">
        <spam className="spam-click">Veja abaixo <svg className="seta" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="black" stroke-width="10"/>
</svg>
</spam>
        
        </div>
        <div className="div-container-click">
            <spam className="spam-click tamanhoDesanimado">Aumentando de tamanho</spam>
            <spam className="spam-click tamanhoAnimado">Aumentando de tamanho</spam>
        </div>
        <div className="div-container-click">
            <spam className="spam-click corDesanimada">Mudando de cor</spam>
           
        </div>
        <div className="div-fotos">
            <div className="div-fotos-container">

            <p>Fotos bonitas</p>
            <div className="foto-carrossel">
            <Fotos/>
            </div>
            </div>
        </div>
                */}
                </div>
        
    )
}

export default Exemplo;