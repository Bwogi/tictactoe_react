import React from 'react'

function Result({ winner, reset }) {
    return ( <
        div className = "result" > { winner == 'CIRCLE' && 'Circle Wins!.' } { winner == 'CROSS' && 'Cross wins!' } { winner == 'It is a tie' && 'It is a tie!!' } <
        button onClick = { reset } > New Game < /button>  < /
        div >
    );
}

export default Result