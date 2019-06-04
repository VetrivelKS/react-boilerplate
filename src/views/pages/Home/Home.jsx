import React, { Component } from "react"
import axios from "axios"
import {
  Table,
  Form,
  Nav,
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"
import "./style.css"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return <div className="home">home</div>
  }
}

export { Home }
export default Home
