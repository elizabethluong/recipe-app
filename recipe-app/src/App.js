import React from "react";
import Form from "./Component/Form";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
          <Form />
        </header>
      </div>
    );
  }
}
export default App;
