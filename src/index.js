import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Flipbox from './components/Flipbox'
import Bouncebounce from './components/Bouncebounce'
import RectBoxes from './components/RectBoxes'
import Cubes from './components/Cubes'
import Drops from './components/Drops'
import Spinning from './components/Spinning'
import Dots from './components/Dots'
import Circledots from './components/Circledots'
import Puzzle from './components/Puzzle'
import Spinningdots from './components/Spinningdots'
import Fold from './components/Fold'

import './style.css'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.querySelector('#root'))

export {
  Flipbox,
  Bouncebounce,
  RectBoxes,
  Cubes,
  Drops,
  Spinning,
  Dots,
  Circledots,
  Puzzle,
  Spinningdots,
  Fold
}