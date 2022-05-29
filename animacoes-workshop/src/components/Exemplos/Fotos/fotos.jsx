import React from "react";
import "./fotos.css"

const Fotos = ({animado}) => {

  const cssAnimado = animado ? "cssComAnimacao" : "cssSemAnimacao"

  const fotos = [
      "https://i0.wp.com/campusceaec.org/wp-content/uploads/2021/09/natureza_bioenergia.png?fit=1024%2C683&ssl=1",
      "https://t2.tudocdn.net/301077?w=1920&h=1440",
      "http://www.osmais.com/wallpapers/201112/flores-lindas-wallpaper.jpg",
      "https://pluviophile.net/wp-content/uploads/wet-empty-road-wallpaper.jpg",
      "https://images6.alphacoders.com/523/523743.jpg"
  ]
  return(
      <>
        {fotos.map((k,i) => {
      return(
            <>
            <img className={cssAnimado} src={`${fotos[i]}`}/>
            </>

      )
        })}
        </>
    )
}

export default Fotos;