import React from 'react'

class RectBoxes extends React.Component {

  constructor(props) {
    super()
  }

  render() {

    const spinner = {
      width: this.props.width || 50,
      height: this.props.height || 40,
      margin: this.props.margin || ''
    }

    const wrapper = {
      backgroundColor: this.props.bgColor || '#333'
    }

    return (
      <div className="rectboxes" style={spinner}>
        <div className="rect1" style={wrapper}></div>
        <div className="rect2" style={wrapper}></div>
        <div className="rect3" style={wrapper}></div>
        <div className="rect4" style={wrapper}></div>
        <div className="rect5" style={wrapper}></div>
      </div>
    )
  }

}

export default RectBoxes