export default function Input({
  label,
  id,
  type = "text",
  value,
  itemID = -1,
  onChangeCB,
}) {
  return (
    <label>
      {label}{" "}
      <input
        type={type}
        id={id}
        value={value}
        itemID={itemID}
        onChange={onChangeCB}
      />
    </label>
  );
}
