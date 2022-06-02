import React,{useState} from 'react'
import './thanks.css'

const Thanks = () => {
    const [bg, setBg] = useState();

    window.addEventListener('scroll', () => {
        let value = window.scrollY
        if(value >= 5500 ){
            setBg(value)

        }
        console.log(value)
    })

    return(
        <>
        <div className='bodyBG'>
        <div className='circle'>
            <img src='https://brasilnativas.com.br/wp-content/uploads/2021/02/azaleia-600x600-1.jpg'/>
        <div className='bg' style={{backgroundSize:  `${100 + (bg - 5500)*2}px`}}></div>
        </div>
        </div>
        </>
    )
}

export default Thanks;