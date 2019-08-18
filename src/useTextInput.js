import React from "react";

const UseTextInput = ({ name, onChange, value, ...rest }) => (
  <input
    name={name}
    type="text"
    value={value}
    onChange={event => {
      event.preventDefault();
      onChange(name, event.target.value);
    }}
    {...rest}
  />
);

export default UseTextInput;
