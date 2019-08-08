import React from 'react'

const Dashboard = (props) => {
    return (
        <div className='dashboard'>
            <button data-testid='ballButton' onClick={props.ball}>Ball</button>
            <button data-testid='strikeButton' onClick={props.strike}>Strike</button>
            <button data-testid='hitButton' onClick={props.hit}>Hit</button>
            <button data-testid='foulButton' onClick={props.foul}>Foul</button>
        </div>
    )
}

export default Dashboard