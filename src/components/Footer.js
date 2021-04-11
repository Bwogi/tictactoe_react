import React from 'react'
import instructions from '../instructions.png';

function Footer() {
    return (
        <div className="footer">

            <div className="inst">
                {/* <img src={instructions} alt="instructions"/> */}
                {/* <h3>Instructions</h3> */}
                <caption>Instructions</caption>
                <ol>
                    <li>Click on an empty space <em>onetime</em> to Start.</li>
                    <li><strong>First player</strong> places 'O's.</li>
                    <li><strong>Second player</strong> then selects an empty space of their choice.</li>
                    <li><strong>Second player</strong> places 'X's.</li>
                    <li>Then the <strong>First player</strong> selects a space of their choice.</li>
                    <li>and so on and so fourth...</li>
                    <li><em><strong>TO WIN:</strong> </em> Fill 3 spaces with your symbol('X' or 'O') upwards, downwards or accross</li>
                </ol>
                <p>ENJOY</p>
            </div>
            <p id="smaller">&#169;2021 All Rights Reserved. Coded in Reactjs by <a href="https://www.facebook.com/andrew.bwogi" target="_blank">(Bwogi)</a></p>
        </div>
    )
}

export default Footer

