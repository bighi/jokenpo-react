export default function BigBox({ children }) {
  const style = {
    height: "12.57rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    backgroundColor: "#000000",
    color: "transparent",
    textShadow: "-0.25rem -0.25rem 0.5625rem rgba(255, 255, 255, 0.4)",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    backgroundClip: "text",
    transition: "transform 1ms",
    transform: "translateX(0) scale(1)",
  };
  return (
    <div style={style} className="rounded-box">
      {children}
    </div>
  );
}
