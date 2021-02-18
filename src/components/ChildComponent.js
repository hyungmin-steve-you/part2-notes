import React from 'react'

const ChildComponent = ({children}) => {
  return (
    <div>
      <p>This is a child component. Below is props.children</p>
      {children}
    </div>
  )
}

export default ChildComponent