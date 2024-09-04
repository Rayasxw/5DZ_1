
import {useDispatch, useSelector} from "react-redux";

function MainPage() {


    const num = useSelector(state => state.num)



            const dispatch = useDispatch()


            const increment = (value) => {
            dispatch({
                type: 'INCREMENT',
                payload: value
            })
        }


            const decrement = (value) => {
            dispatch({
                type: 'DECREMENT',
                payload: value
            })

        }
            const reset = () => {
            dispatch({
                type: 'RESET',
            })

        }

            return (

            <div>
                <h1>{num}</h1>
                <button onClick={() => increment(1)}>+1</button>
                <button onClick={() => decrement(1)}>-1</button>
                <button onClick={() => increment(10)}>+10</button>
                <button onClick={() => decrement(10)}>-10</button>
                <button onClick={() => reset()}>reset</button>
            </div>
            );


}

export default MainPage;