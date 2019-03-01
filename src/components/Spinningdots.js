import React from 'react'

class Spinningdots extends React.Component {

  constructor (props) {
    super()
  }

  render () 
  {

    const spinner = {
      margin: this.props.margin || '',
      width: this.props.width || 40,
      height: this.props.height || 40
    }

    return (
      <div class="sk-fading-circle" style={spinner}>
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    )
  }

}

export default Spinningdots