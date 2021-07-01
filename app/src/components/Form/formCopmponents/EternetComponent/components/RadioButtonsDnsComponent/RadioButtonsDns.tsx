import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setDnsFlag } from "../../../../../../redux/useFormReducer";
import { useTypedSelector } from "../../../../../../redux/useTypedSelector.hook";

export const RadioButtonsTwo: React.FunctionComponent = () => {

  const { dnsFlag } = useTypedSelector(store => store.form);
  const dispatch = useDispatch();

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    switch (event.target.value) {
      case 'false':
        dispatch(setDnsFlag(false));
        break;
      case 'true':
        dispatch(setDnsFlag(true))
        break;
      default:
        break;
    }
  }

  return (
    <RadioGroup value={dnsFlag} onChange={radioChangeHandler}>
      <FormControlLabel
        value={false}
        control={<Radio color="primary" />}
        label="Obtain DNS server address automatically"
        labelPlacement="end"
      />
      <FormControlLabel
        value={true}
        control={<Radio color="primary" />}
        label="Use the following DNS server address"
        labelPlacement="end"
      />
    </RadioGroup>
  )
}