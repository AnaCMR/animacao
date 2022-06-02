import React,{useState} from 'react'
import './thanks.css'

const Thanks = () => {
    const [bg, setBg] = useState();

    window.addEventListener('scroll', () => {
        let value = window.scrollY
        if(value >= 5500 ){
            setBg(value)

        }
    })

    return(
        <>
        <div className='bodyBG'>
        <div className='circle'>
            <div className='circleContainer'>
            <img src='rv-logo.png'/>
            </div>
        <div className='bg' style={{backgroundSize:  `${100 + (bg - 6000)*2}px`}}></div>
        </div>
        </div>
        </>
    )
}

export default Thanks;