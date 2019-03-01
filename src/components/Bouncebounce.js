import React from 'react'

class Bouncebounce extends React.Component {

  constructor(props) {
    super()
  }

  render() {

    const spinner = {
      width: this.props.width || 40,
      height: this.props.height || 40,
      margin: this.props.margin || ''
    }

    const wrapper = {
      backgroundColor: this.props.bgColor ? this.props.bgColor : '#333'
    }

    return (
      <div className="bouncebounce" style={spinner}>
        <div className="double-bounce1" style={wrapper}></div>
        <div className="double-bounce2" style={wrapper}></div>
      </div>
    )
  }

}

export default Bouncebounce