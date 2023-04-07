import Topbar from "./components/Topbar";
import Filterbar from "./components/Filterbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Topbar />
      <Container fluid style={{marginTop: 70}}>
        <Filterbar />
      </Container>
    </>
  );
}

export default App;
