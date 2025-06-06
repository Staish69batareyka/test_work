import {createElement as e} from "react";
function App() {

  return e("div", {className: "conteiner"}, [
      e('h1', {className: ""}, "Test-JSX"),
      e("button", {className: 'btn'}, "click")
  ])
}

export default App
