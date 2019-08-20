import { useState } from "react";

export default function useInput(initialValue, type = "text") {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { onChange, value, type };
}
