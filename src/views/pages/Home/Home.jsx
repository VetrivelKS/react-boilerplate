import React, { Component } from "react"
import axios from "axios"
import { queries } from "./Queries"
import { GamesTable } from "../GamesTable"
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
    this.state = {
      gamesData: [],
      filteredData: [],
      searchInput: "",
      sortValue: "",
    }
    this.searchInput = React.createRef()
  }
  componentDidMount() {
    // did mount is the apt place to make calls and fetch data
    queries.setDataToLocalStorage()
    const fetchedData = queries.getGamesData()
    this.setState({ gamesData: fetchedData, filteredData: fetchedData })
  }
  handleSearchChange = event => {
    // console.log("e", )
    event.preventDefault()
    const searchTerm = this.searchInput.current.value.toLowerCase()

    const matchingGames = this.state.gamesData.filter(game => {
      const gameName = game.Name.toString().toLowerCase()
      return gameName.includes(searchTerm)
    })
    this.setState({ filteredData: matchingGames })
  }
  sortByYear = eventKey => {
    console.log(eventKey)
    const tempData = JSON.parse(JSON.stringify(this.state.filteredData))
    tempData.sort((game1, game2) => {
      return eventKey === "ascending"
        ? game1.Year - game2.Year
        : game2.Year - game1.Year
    })
    this.setState({ filteredData: tempData })

    // await this.setState({filteredData: tempData})
  }
  renderSearchForm = () => {
    return (
      <Container className="px-8 mt-4">
        <Form>
          <Form.Group as={Row} controlId="formSearch">
            <Form.Label column sm={2}>
              Search:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                ref={this.searchInput}
                type="text"
                placeholder="Type a game name to search"
                onChange={e => this.handleSearchChange(e)}
              />
            </Col>
            <Col sm={2}>
              <DropdownButton
                id="dropdown-item-button"
                title="Sort by year"
                onSelect={e => this.sortByYear(e)}>
                <Dropdown.Item as="button" eventKey="ascending">
                  Ascending
                </Dropdown.Item>
                <Dropdown.Item as="button" eventKey="descending">
                  Descending
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
  render() {
    return (
      <div className="home">
        {this.renderSearchForm()}
        <GamesTable filteredData={this.state.filteredData} />
      </div>
    )
  }
}

export { Home }
export default Home
