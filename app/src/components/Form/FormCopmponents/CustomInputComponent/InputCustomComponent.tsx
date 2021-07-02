import { useState } from "react";
import { InputState } from "../../../../types/types";
import './Inputs.css';


export const CustomInput: React.FunctionComponent<InputState> = ({ label, inputValue, required, flag, callback }) => {
  const [validated, setValidated] = useState<boolean>(true);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (callback(event)) {
      setValidated(true);
    } else {
      setValidated(false);
    };
  }
  return (
    <div className='inputs__block'>
      <label className={required ? 'input__name required' : 'input__name'} style={flag ? {} : { opacity: 0.5 }} > {label}: </label>
      <input
        name={inputValue}
        className='form__input'
        disabled={flag ? false : true}
        style={validated ? {} : { color: "rgb(240, 38, 38)" }}
        onChange={changeHandler}
      />
    </div>
  )
}