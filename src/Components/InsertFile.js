import React, {Component} from "react"
import '../Styles/InsertFile'

class InsertFile extends React.Component {
  render() {
    return (
      <div className="insertFileForm">
        <form>
          Insert file:
          <input type="file" id="name-of-file" />

        </form>
      </div>
    )
  }
}

export default InsertFile
