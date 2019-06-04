import React, { Component } from "react"
import { Table, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

class GamesTable extends Component {
  renderGameContent = (gameData, index) => {
    return (
      <tr key={index} onClick={e => this.navigateToGame(e)}>
        <td>{gameData.Rank}</td>
        <td>
          <Link to={"game/" + gameData.Rank}>{gameData.Name}</Link>
        </td>
        <td>{gameData.Year}</td>
        {/*} <td>{gameData.Platform}</td>
        <td>{gameData.Genre}</td>
        <td>{gameData.Publisher}</td>
    <td>{gameData.Global_Sales}</td> */}
      </tr>
    )
  }
  render() {
    return (
      <div className="col-lg-12 mb-4 mt-4 scrollTable">
        <Table striped bordered variant="dark" responsive hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Year</th>
              {/* <th>Platform</th>
              <th>Genre</th>
              <th>Publisher</th>
              <th>GlobalSales</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.filteredData.map((game, index) =>
              this.renderGameContent(game, index)
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export { GamesTable }
export default GamesTable
