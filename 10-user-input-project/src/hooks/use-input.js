import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const valueIsInvalid = !valueIsValid && valueTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
