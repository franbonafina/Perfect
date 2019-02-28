import React from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ChordSelector from '../components/chord_selector'

@kea({
    path: () => ['kea', 'counter'],
    actions: () => ({
        increment: amount => ({ amount }),
        decrement: amount => ({ amount })
  }),
  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => state + payload.amount,
        [actions.decrement]: (state, payload) => state - payload.amount
      }
    ]
  }),
  selectors: ({ selectors }) => ({
    doubleCounter: [
      () => [selectors.counter],
      counter => counter * 2,
      PropTypes.number
    ]
  })
})

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Double Counter: {this.props.doubleCounter}</p>
        <Button type='button' onClick={() => this.actions.increment(1)}>Increment</Button>
        <Button type='button' onClick={() => this.actions.decrement(1)}>Decrement</Button>
        <ChordSelector chord="A"/>
      </div>
    );
  }
}

export default App
