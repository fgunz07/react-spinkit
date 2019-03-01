import React from 'react'

class Drops extends React.Component {

  constructor (props) {
    super()
  }

  render () 
  {
    const spinner = {
      width:          this.props.width || 50,
      height:         this.props.height || 50,
      margin:         this.props.margin || '',
      backgroundColor:this.props.bgColor || '#333'
    }

    return (
      <div className="drops" style={spinner}></div>
    )
  }

}

export default Drops