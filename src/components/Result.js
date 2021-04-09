import React from 'react'

function Result({ winner, reset }) {
    return ( <
        div className = "result" > { winner == 'CIRCLE' && 'Circle Wins!.' } { winner == 'CROSS' && 'Cross wins!' } { winner == 'Tie!!' && 'Tie!!' } <
        button onClick = { reset } > Reset < /button>  <
        /div>
    );
}

export default Result