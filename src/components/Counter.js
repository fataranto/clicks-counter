import React from "react";
import '../styles/Counter.css';

function Contador({ numClics }) {
    return (
        <div className="contador">
            {numClics}
        </div>
    )
}

export default Contador;