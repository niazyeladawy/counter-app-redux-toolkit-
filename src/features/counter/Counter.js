import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue } from './counterSlice'
import './counter.css'

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [increaseAmount, setincreaseAmount] = useState(1);

    return (
        <div className='counter'>
            <div className='main'>
                <button onClick={() => dispatch(increment())}>+</button>
                <span style={{fontSize:"38px"}}>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div>
                <input type="number" onChange={(e)=> setincreaseAmount(parseInt(e.target.value))} />
                <button onClick={() => dispatch(incrementByValue(increaseAmount))}>increase by value</button>
            </div>
        </div>
    )
}

export default Counter