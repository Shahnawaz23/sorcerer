import "./App.css";
import Button from "./components/Button";
import Editor from "./components/Editor";
import Title from "./components/Title";

function App() {

  return (
    <div className="App">
      <div className="head">
        <Title className="title" />
        <Button/>
      </div>
      <Editor />
    </div>
  );
}

export default App;
