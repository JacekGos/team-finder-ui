import Topbar from "./components/Topbar";
import Filterbar from "./components/Filterbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Topbar />
      <div style={{marginTop: 70}}>
        <Filterbar />
      </div>
    </>
  );
}

export default App;
