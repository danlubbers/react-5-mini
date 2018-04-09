// Create Initial State
const initialState = { 
    currentValue: 0,
    // values added for undo/redo buttons
    futureValues: [],
    previousValues: [] 
};

// Establish variable action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

// Update the reducer to process these actions into state changes
    // INCREMENT should increment 'currentValue' by the given amount.
    // DECREMENT should decrement 'currentValue' by the given amount. 
    // In reducer we need to use object literal in the return statement, return {}, not ().
export default function counter( state = initialState, action ) {
    switch ( action.type ) {
        case INCREMENT:
            return { 
                currentValue: state.currentValue + action.amount, 
                // Refactoring 'initialState' and 'counter' to handle undo/redo logic
                futureValues: [],
                previousValues: [ state.currentValue, ...state.previousValues ]
            };
        case DECREMENT:
            return { 
                currentValue: state.currentValue - action.amount, 
                futureValues: [],
                previousValues: [ state.currentValue, ...state.previousValues ]
            };
        case UNDO:
            return {
                currentValue: state.previousValues[ 0 ],
                futureValues: [ state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1, state.previousValues.length) 
            }
        case REDO:
            return {
                currentValue: state.futureValues[ 0 ],
                futureValues: state.futureValues.slice( 1, state.futureValues.length),
                previousValues: [ state.currentValue, ...state.previousValues]
            }
        default:
        return state;
    }    
}

// Write action creators corresponding to INCREMENT and DECREMENT action types.
    // Each of these actions creators should accept an 'amount' arguement.
export function increment( amount ) {
    return { amount, type: INCREMENT };
}

export function decrement( amount ) {
    return { amount, type: DECREMENT };
}

// Write action creators for UNDO and REDO
export function undo() {
    return { type: UNDO };
}

export function redo() {
    return { type: REDO};
}