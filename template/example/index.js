import React from 'react'
import { render } from 'react-dom'
import Hello from '../src'

const App = () =>
  <Hello></Hello>

render(<App />, document.getElementById('app'))
