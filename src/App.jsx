import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Libri from "./assets/books/fantasy.json"

import Booklist from "./components/Booklist"
import CommentArea from "./components/CommentARea"

function App() {
  return (
    <>
      <Booklist Books={Libri} />
      <CommentArea />
    </>
  )
}

export default App
