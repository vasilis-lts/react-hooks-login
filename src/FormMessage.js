import React, { useState, useEffect } from "react";

export default function FormMessage(props) {
  const [Message, setMessage] = useState("");

  // Component did mount
  useEffect(() => {
    console.log("Form message component mounting");
  }, []);

  // Component did update
  useEffect(() => {
    console.log("password length " + props.passwordLength);
    if (props.passwordLength >= 6) {
      setMessage("Password ok!");
    } else {
      setMessage("Please enter a password with at least 6 characters");
    }
  }, [props.passwordLength]);

  // Component will unmount
  useEffect(() => {
    return () => {
      console.log("Form message component unmounts");
    };
  }, []);

  return (
    <div className={`mt1 ${props.passwordLength < 6 ? "red" : "green"}`}>
      {Message}
    </div>
  );
}
