import React from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const addBtn = () => {
        dispatch({
            type: "increment"
        })
    }
    const subBtn = () => {
        dispatch({
            type: "decrement"
        })
    }
    const add25 = () => {
        dispatch({
            type: "incrementByValue",
            payload: 25
        })
    }
    return (
        <div>
            <button onClick={addBtn}>increament</button>
            <button onClick={add25}>increament by 25</button>
            <button onClick={subBtn}>decreament</button>
        </div>
    )
}

export default Home
