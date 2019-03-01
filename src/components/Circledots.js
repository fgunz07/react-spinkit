import React from 'react'

class Circledots extends React.Component {

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
      <div className="sk-circle" style={spinner}>
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
    )
  }

}

export default Circledots