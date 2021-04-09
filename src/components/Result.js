import React from 'react'

function Result({ winner }) {
    return ( <
        div className = "result" > { winner == 'CIRCLE' && 'Circle won the game.' } { winner == 'CROSS' && 'Cross wins.' } { winner == 'Tie!!' && 'Tie!!' } <
        /div>
    )
}

export default Result