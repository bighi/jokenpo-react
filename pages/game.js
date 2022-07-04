import { Col, Container, Row } from "react-bootstrap";
import BigBox from "../components/BigBox";
import Centralizer from "../components/Centralizer";
import GameHeader from "../components/GameHeader";
import HandButton from "../components/HandButton";
import HandOptions from "../components/HandOptions";
import VS from "../components/VS";

function game() {
  const cpuStyles = {
    fontSize: "1.25rem",
    color: "#888888",
    textAlign: "center",
    fontWeight: "bold",
  };

  return (
    <Container>
      <Centralizer>
        <GameHeader />
      </Centralizer>
      <Centralizer>
        <HandOptions />
      </Centralizer>
      <Centralizer>
        <VS />
      </Centralizer>
      <p style={cpuStyles}>CPU</p>
      <Centralizer>
        <BigBox>JOGAR!</BigBox>
      </Centralizer>
    </Container>
  );
}

export default game;
