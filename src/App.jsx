import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Libri from "./assets/books/fantasy.json"

import Booklist from "./components/Booklist"

function App() {
  return (
    <>
      <Booklist Books={Libri} />
    </>
  )
}

export default App
