import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentARea"

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
        <Card.Img
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            })
          }}
          src={this.props.Books.img}
          alt={this.props.Books.title}
        />
        <Card.Body>
          <Card.Title>{this.props.Books.title}</Card.Title>
        </Card.Body>
        {this.state.selected && <CommentArea asin={this.props.Books.asin} />}
      </Card>
    )
  }
}

export default SingleBook
