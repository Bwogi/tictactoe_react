import React from 'react'
import Circle from './Circle';

function Square({position, value}) {
    return ( 
        <div className="square">
            {value == CIRCLE && <Circle />}
            </div>
    );
}

export default Square