import React, { PropTypes } from 'react'

const InputBox = ({number, Click}) => {
    return <div className='input-box' data-key={number} onClick={()=>Click(number)}>{number}</div>
}

const renderNumberList = (onNumberClick, onCalculateTotalClick) => {
    let NumberArray = [];
    for(let i = 0; i <= 9; i++){
        NumberArray.push(<InputBox key={i} number={i} Click={onNumberClick}/>);
    }
    NumberArray.splice(1, 0, <InputBox key={'.'} number={'.'} Click={onNumberClick}/>);
    NumberArray.splice(2, 0, <InputBox key={'='} number={'='} Click={onCalculateTotalClick}/>);
    return NumberArray
}

const renderOpratorList = (onToggleOpratorClick) => {
    var opratorList = [
        <InputBox key={'+'} number={'+'} Click={onToggleOpratorClick}/>,
        <InputBox key={'-'} number={'-'} Click={onToggleOpratorClick}/>,
        <InputBox key={'*'} number={'*'} Click={onToggleOpratorClick}/>,
        <InputBox key={'/'} number={'/'} Click={onToggleOpratorClick}/>
    ]
    return opratorList
}

const NumberList = ({onNumberClick, onCalculateTotalClick, onToggleOpratorClick}) => (
    <div className='number-list'>
        <div className='number-box'>
            {renderNumberList(onNumberClick, onCalculateTotalClick)}
        </div>
        <div className='oprator-box'>
            {renderOpratorList(onToggleOpratorClick)}
        </div>
    </div>
)

export default NumberList