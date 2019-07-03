import { useState } from "react";

export function useKeyPress({ events = [], callback = () => {} }) {}

export function useToggle({ value = false, customTuple = [] } = {}) {
  //controllo che siano booleani

  const [returned, setToggle] = useState(value);

  return [
    returned,
    () => {
      setToggle(!returned);
    }
  ];
}
