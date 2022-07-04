import { Col, Row } from "react-bootstrap";

export default function Centralizer({ children }) {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>{children}</Col>
    </Row>
  );
}
