const initialState = {
    currentValue = 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// This is an action creator or action function into the reducer param
export function increment(num) {
    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement(num) {
    return {
        type: DECREMENT,
        payload: num
    }
}

// In reducer we need to use object literal in the return statement, return {}, not ().
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: 
// return Object.assign({}, state, {currentValue + action.payload}) <---- Same thing as return below!!!
            return {
                // This is cleaner code than what is written above 
                currentValue: state.currentValue + action.payload
            }

        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload
            }
    
        default:
            return state;
    }
}