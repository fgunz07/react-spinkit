import React from 'react'

class Puzzle extends React.Component {

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
      backgroundColor: this.props.bgColor || '#333'
    }

    return (
      <div class="sk-cube-grid" style={spinner}>
        <div class="sk-cube sk-cube1" style={wrapper}></div>
        <div class="sk-cube sk-cube2" style={wrapper}></div>
        <div class="sk-cube sk-cube3" style={wrapper}></div>
        <div class="sk-cube sk-cube4" style={wrapper}></div>
        <div class="sk-cube sk-cube5" style={wrapper}></div>
        <div class="sk-cube sk-cube6" style={wrapper}></div>
        <div class="sk-cube sk-cube7" style={wrapper}></div>
        <div class="sk-cube sk-cube8" style={wrapper}></div>
        <div class="sk-cube sk-cube9" style={wrapper}></div>
      </div>
    )
  }

}

export default Puzzle