import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        onClick={() => {
          this.setState({
            selected: !this.state.selected,
          })
        }}
        className={this.state.selected ? "border border-danger" : ""}
      >
        <Card.Img src={this.props.Books.img} alt={this.props.Books.title} />
        <Card.Body>
          <Card.Title>{this.props.Books.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
