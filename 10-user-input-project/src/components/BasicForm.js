import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const inputNotEmpty = (value) => value.trim() !== "";
const inputIsEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredFirst,
    isValid: enteredFirstIsValid,
    valueIsInvalid: firstIsInvalid,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: resetName,
  } = useInput(inputNotEmpty);
  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    valueIsInvalid: lastIsInvalid,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetLast,
  } = useInput(inputNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    valueIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(inputIsEmail);

  useEffect(() => {
    if (enteredFirstIsValid && enteredLastIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredFirstIsValid, enteredLastIsValid, enteredEmailIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredFirstIsValid || !enteredLastIsValid || !enteredEmailIsValid) {
      return;
    }

    resetName();
    resetLast();
    resetEmail();
  };

  const firstInputClasses = firstIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastInputClasses = lastIsInvalid
    ? "form-control invalid"
    : "form-control";
  const EmailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={enteredFirst}
          />
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}
          />
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
