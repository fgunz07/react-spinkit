import React from 'react'

class Dots extends React.Component {

  constructor (props) {
    super()
  }

  render ()
  { 

    const spinner = {
      margin: this.props.margin || ''
    }

    const wrapper = {
      width: this.props.width || 18,
      height: this.props.height || 18,
      backgroundColor: this.props.bgColor || '#333'
    }

    return (
      <div className="dots" style={spinner}>
        <div className="bounce1" style={wrapper}></div>
        <div className="bounce2" style={wrapper}></div>
        <div className="bounce3" style={wrapper}></div>
      </div>
    )
  }

}

export default Dots