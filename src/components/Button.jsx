export default function Button({
  text,
  color = "blue",
  fontSize = 12,
  itemID = -1,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle} itemID={itemID}>
      {text}
    </button>
  );
}
