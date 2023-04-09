import Topbar from "./components/Topbar";
import Filterbar from "./components/Filterbar";
import { Container } from "react-bootstrap";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Topbar />
      <Container fluid style={{marginTop: 70}}>
        <Filterbar />
        <Events />
      </Container>
    </>
  );
}

export default App;
