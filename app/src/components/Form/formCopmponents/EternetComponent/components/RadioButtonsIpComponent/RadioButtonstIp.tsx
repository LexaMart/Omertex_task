import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setIpFlag } from "../../../../../../redux/useFormReducer";
import { useTypedSelector } from "../../../../../../redux/useTypedSelector.hook";

export const RadioButtonsOne: React.FunctionComponent = () => {
  
  const { ipFlag } = useTypedSelector(store => store.form);
  const dispatch = useDispatch();

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    switch (event.target.value) {
      case 'false':
        dispatch(setIpFlag(false));
        break;
      case 'true':
        dispatch(setIpFlag(true))
        break;
      default:
        break;
    }
  }

  return (
    <RadioGroup value={ipFlag} onChange={radioChangeHandler}>
      <FormControlLabel
        value={false}
        control={<Radio color="primary" />}
        label="Obtain an IP address automatically (DHCP/BoostP)"
        labelPlacement="end"
      />
      <FormControlLabel
        value={true}
        control={<Radio color="primary" />}
        label="Use the following IP address"
        labelPlacement="end"
      />
    </RadioGroup>
  )
}