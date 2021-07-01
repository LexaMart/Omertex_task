import { Checkbox, FormControlLabel } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setWifiFlag } from "../../../../../../redux/useFormReducer";
import { useTypedSelector } from './../../../../../../redux/useTypedSelector.hook';

export const EnableWifiComponent: React.FunctionComponent = () => {
const {wifi} = useTypedSelector(store => store.form);
const dispatch = useDispatch();

  const checkBoxHandler = () => {
    dispatch(setWifiFlag(!wifi))
  }

  return (
    <FormControlLabel
      control={<Checkbox onChange={checkBoxHandler} checked={wifi} color="primary" />}
      label="Enable WiFi"
      labelPlacement="end"
    />
  )
}