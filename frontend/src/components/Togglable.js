import React, { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className={`display-${hideWhenVisible}`}>
        {props.name}
        <button
          className="bg-blue-500 m-1 rounded-sm"
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>hide</button>
      </div>
    </div>
  )
}

export default Togglable
