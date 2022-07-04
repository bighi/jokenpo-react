export default function VS() {
  const vsStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "1rem auto 0",
    backgroundColor: "#88888f",
    color: "transparent",
    textShadow: " 0.2rem 0.2rem 0.35rem rgba(255, 255, 255, 0.8)",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    backgroundClip: "text",
    display: "flex",
    justifyContent: "space-around",
  };
  return <span style={vsStyle}>VS</span>;
}
