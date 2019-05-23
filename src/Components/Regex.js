import React, {Component} from "react"
import "../Styles/Regex"

class Regex extends React.Component {
  render() {
    return (
      <div className="regex-form">
      <form>
        Grep:
        <br />
        <input type="text" id="grep-form" />

      </form>

      </div>
    )
  }
}

export default Regex
