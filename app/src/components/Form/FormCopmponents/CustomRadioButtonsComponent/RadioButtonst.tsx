import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { RadioState } from "../../../../types/types";

export const RadioButtons: React.FunctionComponent<RadioState> = ({labelFalse, labelTrue, flagName, flag, callback}) => {
  
  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    callback(flagName, event.target.value);
  }

  return (
    <RadioGroup value={flag} onChange={radioChangeHandler}>
      <FormControlLabel
        value={false}
        control={<Radio color="primary" />}
        label={labelFalse}
        labelPlacement="end"
      />
      <FormControlLabel
        value={true}
        control={<Radio color="primary" />}
        label ={labelTrue}
        labelPlacement="end"
      />
    </RadioGroup>
  )
}