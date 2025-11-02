import { ListGroup } from "react-bootstrap"
import { Component } from "react"

class CommentArea extends Component {
  state = {
    comments: [],
  }

  comments = function () {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTA1ZGQ4ZjNhMTVjZDAwMTVkYTNiMmIiLCJpYXQiOjE3NjE5OTI0MDgsImV4cCI6MTc2MzIwMjAwOH0.6maTb9E5QCXJog0PhuZIffZctHdehEsI-oNCvFBaj44",
          // se vuoi: 'Accept': 'application/json'
        },
      }
    )
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("errore nella risposta")
        }
        return Response.json()
      })
      .then((data) => {
        console.log("dati ricevuti ", data)
        this.setState({
          comments: data,
        })
      })
      .catch((error) => {
        console.log("si è verificato un errore", error)
      })
  }
  componentDidMount() {
    this.comments()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.comments()
    }
  }
  render() {
    return (
      <ListGroup>
        {this.state.selected ? (
          this.state.comments.map((comment) => (
            <ListGroup.Item key={comment._id}>
              {comment.comment} 1/{comment.rate}
            </ListGroup.Item>
          ))
        ) : (
          <p>Nessun commento da mostrare</p>
        )}
      </ListGroup>
    )
  }
}

export default CommentArea
