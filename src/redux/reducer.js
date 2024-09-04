

const initialState = {
    num: 0
};

function reducer (state = initialState, action)  {

    if(action.type === 'INCREMENT'){
        return{
            ...state,
            num: state.num + action.payload}
    }else if (action.type === 'DECREMENT') {
        return {
            ...state,
            num: Math.max(state.num - action.payload, 0)
        }
    }
    else if(action.type === 'RESET') {
        return initialState
    }
    return initialState
}
export default reducer;
