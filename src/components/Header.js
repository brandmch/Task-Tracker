import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
      <button>Add</button>
    </header>
  )
}

const headingStyle = {
    color: 'yellow', 
    backgroundColor: 'green'
}

export default Header
 