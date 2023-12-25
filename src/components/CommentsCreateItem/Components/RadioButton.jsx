import React from "react";

export default function RadioButton({
id, name, value, checked = false, changeHandler
}) {
  return <>
    <input
      key={Date.now()}
      type="radio"
      id={id}
      name={name}
      className="comments__radio-btn"
      value={value}
      checked={checked}
      onChange={() => (name.startsWith("not") ? changeHandler(false) : changeHandler(true))}
    />
    <label htmlFor={id} className="comments__radio-label">{value}</label>
  </>;
}