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
        <div className='circle'>
            <div className='circleContainer'>
            <img src='thanks.png' alt='Muito obrigada'/>
            </div>
        <div className='bg' style={{backgroundSize:  `${100 + (bg - 6000)*2}px`}}></div>
        </div>
        </>
    )
}

export default Thanks;