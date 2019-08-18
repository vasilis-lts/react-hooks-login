import React, { useState } from "react";
import FormMessage from "./FormMessage";
import UseTextInput from "./useTextInput";

export default function LoginScreen() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [formMessageVisible, setFormMessageVisible] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (formValues.password.length < 6) {
      setFormMessageVisible(true);
    } else {
      console.log(formValues);
      setFormMessageVisible(false);
      console.log("%cLogin Successful!", "color:green;font-size:2rem;");
    }
  };

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="screen flex-center-xy">
      <form className="flex-column" onSubmit={handleSubmit} autoComplete="off">
        <h1>Login Form</h1>

        <label htmlFor="username">Username</label>
        <UseTextInput
          name="username"
          value={formValues.username}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <UseTextInput
          name="password"
          value={formValues.password}
          onChange={onChange}
          required
        />

        <button className="mt1 btn btn-primary" type="submit">
          Login
        </button>
        {formMessageVisible && (
          <FormMessage passwordLength={formValues.password.length} />
        )}
      </form>
    </div>
  );
}
