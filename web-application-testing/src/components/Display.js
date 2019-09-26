import React from 'react'

const Display = (props) => {
    return (
        <div className='display'>
            <p>Balls: <span data-testid='balls'>{props.balls}</span></p>
            <p>Strikes: <span data-testid='strikes'>{props.strikes}</span></p>
        </div>
    )
}

export default Display