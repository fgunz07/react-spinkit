import React from 'react'

class Fold extends React.Component {

  constructor(props) {
    super()
  }

  render() {

    const spinner = {
      width: this.props.width || 40,
      height: this.props.height || 40,
      margin: this.props.margin || ''
    }

    return (
      <div class="sk-folding-cube" style={spinner}>
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    )
  }

}

export default Fold