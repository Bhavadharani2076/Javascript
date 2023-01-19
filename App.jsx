import Heading from "./components/Heading";
import Note from "./components/Note";
import Footer from "./components/Footer";
var React = require("react");

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
