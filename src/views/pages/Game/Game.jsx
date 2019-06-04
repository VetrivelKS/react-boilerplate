import React, { Component } from "react"
import { Container, Table, Row, Col, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { queries } from "../Home/Queries"
import "./style.css"

class Game extends Component {
  render() {
    const gameIndex = this.props.match.params.gameId || 0
    const gameDetail = queries.getGameDetail(gameIndex)
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1>{gameDetail.Name}</h1>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <Link to={"/"}>{"< Go back to games list"}</Link>
            </Nav>
          </Col>
        </Row>
        <Table bordered>
          <tr>
            <td>Rank</td>
            <td>{gameDetail.Platform}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{gameDetail.Year}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>{gameDetail.Genre}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{gameDetail.Publisher}</td>
          </tr>
          <tr>
            <td>Global Sales</td>
            <td>{gameDetail.Global_Sales}</td>
          </tr>
        </Table>
      </Container>
    )
  }
}

export { Game }
export default Game
