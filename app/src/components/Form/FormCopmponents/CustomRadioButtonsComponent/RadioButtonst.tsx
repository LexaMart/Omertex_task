import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { RadioState } from "../../../../types/types";

export const RadioButtons: React.FunctionComponent<RadioState> = ({ labelFalse, labelTrue, flagName, flag, disabled = false, callback }) => {

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    callback(flagName, event.target.value);
  }

  return (
    <RadioGroup value={flag} onChange={radioChangeHandler}>
      <FormControlLabel
        disabled={disabled}
        value={false}
        control={<Radio color="primary" />}
        label={labelFalse}
        labelPlacement="end"
      />
      <FormControlLabel
        disabled={disabled}
        value={true}
        control={<Radio color="primary" />}
        label={labelTrue}
        labelPlacement="end"
      />
    </RadioGroup>
  )
}