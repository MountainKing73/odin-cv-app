import { useState } from "react";

export default function Input({ label, id, type = "text", onChangeCB }) {
  return (
    <label>
      {label} <input type={type} id={id} onChange={onChangeCB} />
    </label>
  );
}
