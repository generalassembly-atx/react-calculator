import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" />
            <span>+</span>
          <input type="text" />
            <span>=</span>
        <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }
})
