import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';

import { increment, decrement, redo, undo } from './ducks/counter';

class App extends Component {
  render() {

    // Deconstruct to get variables
    const {currentValue, decrement, futureValues, previousValues, increment, redo, undo} = this.props;

    return (
      <div className="app">
        <section className="counter">
            {/* add the variable currentValue so the currentValue shows up on webpage */}
          <h1 className="counter__current-value">{ currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              // Use the .counter_button buttons to call 'increment' with the correct 'amount'
              onClick={ () => increment (1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              // Use the .counter_button buttons to call 'increment' with the correct 'amount'
              onClick={ () => increment (5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              // Use the .counter_button buttons to call 'decrement' with the correct 'amount'
              onClick={ () => decrement (1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              // Use the .counter_button buttons to call 'decrement' with the correct 'amount'
              onClick={ () => decrement (5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ previousValues.length === 0 }
              // Use the .counter_button buttons to call 'undo' actions.
              onClick={ undo }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ futureValues.length === 0 }
              // Use the .counter_button buttons to call 'redo' actions.
              onClick={ redo }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

// Connecting the App Component to Redux
// Use a mapStateToProps function that takes in state and returns 'state'
function mapStateToProps( state ) {
    // This is using object.assign to merge the objects
    // This return allows you to pick what you want to return from the redux store. 
  return { currentValue: state.currentValue,
    // Example of picking 
    myName: state.myName
}
}

// Use connects mapDispatchToProps to place the action creators on App's props!
// The connect function returns what to get from the redux store
export default connect( mapStateToProps, { increment, decrement, redo, undo }) ( App );
