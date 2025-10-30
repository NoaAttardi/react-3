import { Component } from "react"
import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"

class Booklist extends Component {
  state = {
    searchlibro: "",
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Form.Control
              type="search"
              placeholder="Cerca il tuo libro"
              value={this.state.searchlibro}
              onChange={(e) => {
                this.setState({
                  searchlibro: e.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4 g-5">
          {this.props.Books.filter((Libro) =>
            Libro.title
              .toLowerCase()
              .includes(this.state.searchlibro.toLowerCase())
          ).map((book, index) => (
            <Col key={index} md={8} lg={8}>
              <SingleBook Books={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default Booklist
