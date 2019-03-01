import React from 'react'

class Spinning extends React.Component {

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

    const wrapper = {
      backgroundColor: this.props.bgColor || '#333'
    }

    return (
      <div className="spinning" style={spinner}>
        <div className="dot1" style={wrapper}></div>
        <div className="dot2" style={wrapper}></div>
      </div>
    )
  }

}

export default Spinning