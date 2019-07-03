import React, { useRef, useEffect } from "react";

function Input({ placeholder = "ciao", autofocus = false, visible = false }) {
  const theInput = useRef(null);

  useEffect(() => {
    if (autofocus) {
      theInput.current.focus();
    }
  });

  return (
    <input
      ref={theInput}
      placeholder={placeholder}
      type={visible ? "input" : "password"}
    />
  );
}

export default Input;
