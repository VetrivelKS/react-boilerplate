import React, { Component } from "react"
import { Container, Row, Col, Nav } from "react-bootstrap"
import "./style.css"
class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row className="justify-content-center align-items-center">
          <Col className="d-flex justify-content-center" md={6} sm={12}>
            <div>This site is developed by Vetrivel K Subramaniam</div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Nav.Link href="http://vetrivelks.github.io" target="_blank">
              Portfolio
            </Nav.Link>
          </Col>
          <Col className="d-flex justify-content-center">
            <Nav.Link
              href="https://www.linkedin.com/in/linktovetri/"
              target="_blank">
              LinkedIn
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export { Footer }
export default Footer
