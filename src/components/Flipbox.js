import React from 'react'

class Flipbox extends React.Component {

  constructor(props) {
    super()
  }

  render() {

    const spinner = {
      width: this.props.width || 40,
      height: this.props.height || 40,
      backgroundColor: this.props.bgColor || '#34495e',
      margin: this.props.margin || ''
    }

    return (
      <div className="flipbox" style={spinner}></div>
    )
  }

}

export default Flipbox