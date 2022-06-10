import React, { useState } from "react";
import "../../Exemplos/exemplos.css"

const Dots = ({active}) => {
    const classActive = active ? "changePageActive" : "changePage"
    return (
         <div className={classActive}></div>
    )
}

export default Dots;