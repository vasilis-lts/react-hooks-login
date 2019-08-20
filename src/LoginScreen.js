import React, { useState } from "react";
import FormMessage from "./FormMessage";
import useInput from "./useInput";

export default function LoginScreen() {
  const username = useInput("");
  const password = useInput("", "password");
  const [formValues, setFormValues] = useState({});
  const [formMessageVisible, setFormMessageVisible] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setFormValues({
      username: username.value,
      password: password.value
    });

    if (password.value.length < 6) {
      setFormMessageVisible(true);
    } else {
      console.log(formValues);
      setFormMessageVisible(false);
      console.log("%cLogin Successful!", "color:green;font-size:2rem;");
    }
  };

  return (
    <div className="screen flex-center-xy">
      <form className="flex-column" onSubmit={handleSubmit}>
        <h1>Login Form</h1>

        <label htmlFor="username">Username</label>
        <input {...username} />
        <label htmlFor="password">Password</label>
        <input {...password} />

        <button className="mt1 btn btn-primary" type="submit">
          Login
        </button>
        {formMessageVisible && (
          <FormMessage passwordLength={password.value.length} />
        )}
      </form>
    </div>
  );
}
