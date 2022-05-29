import React, { useState } from "react";
import "./exemplos.css"
import Fotos from "./Fotos/fotos";

const Exemplo = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isOpened2, setIsOpened2] = useState(false)
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const classActive = active ? "changePageActive" : "changePage"
    const classActive2 = active2 ? "changePageActive" : "changePage"
    const classActive3 = active3 ? "changePageActive" : "changePage"
    const classActive4 = active4 ? "changePageActive" : "changePage"
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
        <div className="menuContainer">
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
        <div className="menuContainer">
       
        <spam className="spam-click comAnimacaoSeta">Veja abaixo <svg className="seta setaAnimada" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
<spam className="spam-click semAnimacao">Veja abaixo <svg className="seta" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
</div>
<div className="menuContainer">
<div className="loading"></div>
     </div>
<div className="menuContainer">
        <spam className="spam-click comAnimacaoSeta">Veja abaixo <svg className="seta setaAnimada" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
<spam className="spam-click semAnimacao">Veja abaixo <svg className="seta" width="98" height="54" viewBox="0 0 98 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L50 52.5L96.5 1" stroke="white" stroke-width="10"/>
</svg>
</spam>
</div>
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