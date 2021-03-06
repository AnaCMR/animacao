import React, { useState } from "react";
import Dots from "../Navigation/Dots/dots";
import CuteDollScared from "../SVG-CuteDoll/cuteDollScared";
import "./exemplos.css"

const Exemplo = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isOpened2, setIsOpened2] = useState(false)
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const tN300px = "-300px";
    const t150px = "150px";
    const t300px = "300px";
    const [translate1, setTranslate1] = useState()
    const [translate2, setTranslate2] = useState()
    const [translate3, setTranslate3] = useState()
    const [translate4, setTranslate4] = useState()
    const [dayValue, setDayValue] = useState(false)

    const isWhite = dayValue ? "#fff" : "transparent" 

    const classActive1Card = active ? "menuButtonActive" : ""
    const classActive2Card = active2 ? "arrowButtonActive" : ""
    const classActive3Card = active3 ? "iconsActive" : ""
    const classActive4Card = active4 ? "toggleButtonsActive" : ""

    const cssOpened = isOpened ? "menuOpened" : "menuClosed"
   const line1Opened = isOpened ? "line1Animation" : ""
   const line2Opened = isOpened ? "line2Animation" : ""
   const line3Opened = isOpened ? "line3Animation" : ""
    const cssOpened2 = isOpened2 ? "menuOpened2" : "menuClosed"

    function toRight() {
        if(active){
            setActive(false)
            setActive2(true)
            setActive3(false)
            setActive4(false)
            setTranslate4(`translateX(${t300px}) scale(0.8)`)
                    setTranslate3(`translateX(${tN300px}) scale(1)`)
                    setTranslate2("translateX(0)")
                    setTranslate1(`translateX(${t150px}) scale(1)`)
        } else if(active2){
            setActive(false)
            setActive2(false)
            setActive3(true)
            setActive4(false)
            setTranslate4(`translateX(${tN300px}) scale(1)`)
                    setTranslate3("translateX(0)")
                    setTranslate2(`translateX(${t150px}) scale(1)`)
                    setTranslate1(`translateX(${t300px}) scale(0.8)`)
        }
        else if(active3){
            setActive(false)
            setActive2(false)
            setActive3(false)
            setActive4(true)
            setTranslate4("translateX(0)")
                    setTranslate3(`translateX(${t150px}) scale(1)`)
                    setTranslate2(`translateX(${t300px})scale(0.8)`)
                    setTranslate1(`translateX(${tN300px}) scale(1)`)
        } else {
            setActive(true)
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setTranslate4(`translateX(${t150px}) scale(1)`)
                    setTranslate3(`translateX(${t300px}) scale(0.8)`)
                    setTranslate2(`translateX(${tN300px}) scale(1)`)
                    setTranslate1("translateX(0)")
        }
    }
    function toLeft() {
        if(active){
            setActive(false)
            setActive2(false)
            setActive3(false)
            setActive4(true)
            setTranslate4("translateX(0)")
            setTranslate3(`translateX(${t150px}) scale(1)`)
            setTranslate2(`translateX(${t300px}) scale(0.8)`)
            setTranslate1(`translateX(${tN300px}) scale(1)`)
        } else if(active2){
            setActive(true)
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setTranslate4(`translateX(${t150px}) scale(1)`)
            setTranslate3(`translateX(${t300px}) scale(0.8)`)
            setTranslate2(`translateX(${tN300px}) scale(1)`)
            setTranslate1("translateX(0)")
        }
        else if(active3){
            setActive(false)
            setActive2(true)
            setActive3(false)
            setActive4(false)
            setTranslate4(`translateX(${t300px}) scale(0.8)`)
            setTranslate3(`translateX(${tN300px}) scale(1)`)
            setTranslate2("translateX(0)")
            setTranslate1(`translateX(${t150px}) scale(1)`)
        } else {
            setActive(false)
            setActive2(false)
            setActive3(true)
            setActive4(false)
            setTranslate4(`translateX(${tN300px}) scale(1)`)
                setTranslate3("translateX(0)")
                setTranslate2(`translateX(${t150px} )scale(1)`)
                setTranslate1(`translateX(${t300px}) scale(0.8)`)
        }
    }
    function allOff() {
        setActive(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }

    return (
        
        <div className="exemplos-bg" style={{backgroundColor: `${isWhite}`}}>
            <div className="containerMoove">
        <div className="part1"></div>
        <div className="part2"></div>
        <div className="part3"></div>
        <div className="part4"></div>
        <div className="part5"></div>
        </div>
  
       
        <h2 className="title2">MICROANIMA????ES</h2>

        <div className="textContainer">
        <p>As microanima????es s??o anima????es com estilo mais profissional!</p>
        <p>S??o anima????es que muitas vezes nem percebemos que est??o l?? mas que fazem total diferen??a </p>
        
        <br/>
        <br/>

        <p className="exemplos">Vamos ver alguns exemplos?</p>
        </div>
        <div className="exemplosContainer">
        <svg className="leftArrow"
        onClick={toLeft} width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1787 12.5607C12.7645 11.9749 12.7645 11.0251 12.1787 10.4393L2.63274 0.893398C2.04696 0.307612 1.09721 0.307612 0.511424 0.893398C-0.0743629 1.47918 -0.0743629 2.42893 0.511424 3.01472L8.9967 11.5L0.511424 19.9853C-0.0743629 20.5711 -0.0743629 21.5208 0.511424 22.1066C1.09721 22.6924 2.04696 22.6924 2.63274 22.1066L12.1787 12.5607ZM8.88196 13H11.118V10H8.88196V13Z" fill="#179cc9"/>
</svg>


        <div className={`menuContainer ${classActive1Card}`} style={{transform: `${translate1}`}}>
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
        <div className={`menuContainer ${classActive2Card}`} style={{transform:  `${translate2}`}}>
       
        <span className="span-click comAnimacaoSeta">Veja abaixo <svg className="seta setaAnimada" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</span>
<span className="span-click semAnimacao">Veja abaixo <svg className="seta" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</span>
</div>
<div className={`menuContainer ${classActive3Card}`} style={{transform:  `${translate3}`}} >
<div className="loading"></div>
<div className="download"><svg width="44" height="53" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9393 32.0607C11.5251 32.6464 12.4749 32.6464 13.0607 32.0607L22.6066 22.5147C23.1924 21.9289 23.1924 20.9792 22.6066 20.3934C22.0208 19.8076 21.0711 19.8076 20.4853 20.3934L12 28.8787L3.51472 20.3934C2.92893 19.8076 1.97918 19.8076 1.3934 20.3934C0.807612 20.9792 0.807612 21.9289 1.3934 22.5147L10.9393 32.0607ZM10.5 0L10.5 31H13.5L13.5 0L10.5 0Z" fill="#222222"/>
</svg>


</div>
<div className="loadingStatus"><div className="loadingLine"></div></div>
     </div>
<div className={`menuContainer ${classActive4Card}`} style={{transform:  `${translate4}`}}>
        <input type="checkbox" onChange={({target}) => setDayValue(!dayValue)} className="day"/>
        <input type="checkbox" className="onOff"/>
</div>
<svg className="rightArrow" 
onClick={toRight} width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1787 12.5607C12.7645 11.9749 12.7645 11.0251 12.1787 10.4393L2.63274 0.893398C2.04696 0.307612 1.09721 0.307612 0.511424 0.893398C-0.0743629 1.47918 -0.0743629 2.42893 0.511424 3.01472L8.9967 11.5L0.511424 19.9853C-0.0743629 20.5711 -0.0743629 21.5208 0.511424 22.1066C1.09721 22.6924 2.04696 22.6924 2.63274 22.1066L12.1787 12.5607ZM8.88196 13H11.118V10H8.88196V13Z" fill="#179cc9"/>
</svg>
</div>
<div className="navigationContainer">
            <div onClick={() => {
                allOff()
                setActive(true)
                    setTranslate4(`translateX(${t150px}) scale(1)`)
                setTranslate3(`translateX(${t300px}) scale(0.8)`)
                setTranslate2(`translateX(${tN300px}) scale(1)`)
                setTranslate1("translateX(0)")}} > <Dots active={active}/></div>
           
                <div  onClick={() => {
                    allOff()
        setActive2(true)
                    setTranslate4(`translateX(${t300px}) scale(0.8)`)
                setTranslate3(`translateX(${tN300px}) scale(1)`)
                setTranslate2("translateX(0)")
                setTranslate1(`translateX(${t150px}) scale(1)`)
                    }}> <Dots active={active2}/></div>
           
   <div onClick={() => {
       allOff()
       setActive3(true)
                    setTranslate4(`translateX(${tN300px}) scale(1)`)
                    setTranslate3("translateX(0)")
                    setTranslate2(`translateX(${t150px}) scale(1)`)
                    setTranslate1(`translateX(${t300px})scale(0.8)`)
                    }}><Dots active={active3}/></div>
                <div  onClick={() => {
                    allOff()
                    setActive4(true)
                    setTranslate4("translateX(0)")
                    setTranslate3(`translateX(${t150px}) scale(1)`)
                    setTranslate2(`translateX(${t300px}) scale(0.8)`)
                    setTranslate1(`translateX(${tN300px}) scale(1)`)
                }}><Dots active={active4}/></div>
                </div>
           
                {dayValue &&
                <CuteDollScared isWhiteBG={true}/>
                }
 
                </div>
        
    )
}

export default Exemplo;