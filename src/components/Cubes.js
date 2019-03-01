import React from 'react'

class Cubes extends React.Component {

  constructor (props) {
    super()
  }

  render () 
  {

    const spinner = {
      margin: this.props.margin || '',
      width:  this.props.width || 40,
      height: this.props.height || 40
    }

    const wrapper = {
      backgroundColor: this.props.bgColor || '' 
    }

    return (
      <div className="cubes" style={spinner}>
        <div className="cube1" style={wrapper}></div>
        <div className="cube2" style={wrapper}></div>
      </div>
    )
  } 

}

export default Cubes