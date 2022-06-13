import React from "react";
import './cutedollScared.css'

const CuteDollScared = ({isWhiteBG}) => {

    const colorLegs = isWhiteBG ? "#000" : "#fff"
    const visibility = isWhiteBG ? "visible" : "hidden"
    return(
        <div className="containerDollScared" style={{visibility: `${visibility}`}}>
        <svg className="doll" width="330" height="227" viewBox="0 0 330 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.5 198.5C102 203.5 101.5 213.5 119.5 213.5M119.5 213.5L122 217.5L119.5 225C116.5 224.167 112.3 220.7 119.5 213.5ZM154 198.5C155.5 203.5 151.6 213.5 136 213.5V223.5C138.5 224.667 142 222.3 142 213.5" stroke={`${colorLegs}`} stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="128.5" cy="100.5" rx="101.5" ry="100.5" fill="#B4E9EC"/>
<ellipse cx="128.5" cy="100.5" rx="101.5" ry="100.5" fill="#B4E9EC"/>
<ellipse cx="99.5" cy="119" rx="8.5" ry="9" fill="black"/>
<ellipse cx="130.5" cy="138" rx="8.5" ry="9" fill="black"/>
<ellipse cx="157.5" cy="118" rx="8.5" ry="9" fill="black"/>
<circle cx="98" cy="116" r="2" fill="#B4E9EC"/>
<circle cx="156" cy="116" r="2" fill="#B4E9EC"/>
<path d="M35 140L28 144.5L19.5 138C18.3287 137.341 16.9339 136.504 15.5 135.569M6.99999 125.5C4.81492 127.685 10.4047 132.245 15.5 135.569M15.5 135.569C12 138.069 8 136 2 130M15.5 135.569C13 132.212 9.5 125.5 15.5 125.5M15.5 135.569C18.1667 135.925 23.5 134.823 23.5 127.569" stroke={`${colorLegs}`} stroke-width="3" stroke-linejoin="round"/>
<path d="M221 139.789L228.212 145L236.97 137.474C238.176 136.711 239.614 135.741 241.091 134.658M249.848 123C252.1 125.53 246.341 130.81 241.091 134.658M241.091 134.658C244.697 137.553 248.818 135.158 255 128.211M241.091 134.658C243.667 130.772 247.273 123 241.091 123M241.091 134.658C238.343 135.071 232.848 133.796 232.848 125.395" stroke={`${colorLegs}`} stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="79.3568" cy="40.4106" rx="9.5" ry="17" transform="rotate(33.8359 79.3568 40.4106)" fill="white"/>
<ellipse cx="56" cy="68.1207" rx="6.28566" ry="10.3785" transform="rotate(33.8359 56 68.1207)" fill="white"/>
<ellipse cx="101.659" cy="135.885" rx="4.78933" ry="7.59939" transform="rotate(90.7204 101.659 135.885)" fill="#FFE0F3"/>
<ellipse cx="158.659" cy="135.885" rx="4.78933" ry="7.59939" transform="rotate(90.7204 158.659 135.885)" fill="#FFE0F3"/>
</svg>

<div className="eyes">
<svg width="75" height="18" viewBox="0 0 75 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 9.5C17 14.1944 13.1944 18 8.5 18C3.80558 18 0 14.1944 0 9.5C0 4.80558 3.80558 1 8.5 1C13.1944 1 17 4.80558 17 9.5Z" fill="#B4E9EC"/>
<path d="M75 8.5C75 13.1944 71.1944 17 66.5 17C61.8056 17 58 13.1944 58 8.5C58 3.80558 61.8056 0 66.5 0C71.1944 0 75 3.80558 75 8.5Z" fill="#B4E9EC"/>
</svg>
</div>

<div className="mouth">
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z" fill="#B4E9EC"/>
</svg>
</div>
        </div>
    )
}

export default CuteDollScared;