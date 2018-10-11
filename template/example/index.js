import React from 'react'
import { render } from 'react-dom'
import HelloWorld from '../src/index'

const App = () =>
  <HelloWorld></HelloWorld>

render(<App />, document.getElementById('app'))
