import { Col, Container, Row } from "react-bootstrap";

export default function GameHeader() {
  const spanStyle = {
    fontSize: "0.625rem",
    fontWeight: "bold",
  };
  const hrStyle = {
    margin: "0",
    height: "6px",
    backgroundColor: "#eeeeee",
    boxShadow:
      "inset -2px -2px 2px rgba(255, 255, 255, 1), inset 2px 2px 2px rgba(136, 160, 183, 0.45)",
    borderRadius: "1.4015rem",
    border: "none",
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline mt-3">
        <h1 className="align-self-end m-0">Jokenpo</h1>
        <span style={spanStyle} className="align-self-end">
          VERSÃO 3.0
        </span>
      </div>
      <hr style={hrStyle} />
    </>
  );
}
