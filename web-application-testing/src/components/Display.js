import React from 'react'

const Display = (props) => {
    return (
        <div className='display'>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
        </div>
    )
}

export default Display