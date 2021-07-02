import { Checkbox, FormControlLabel } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setWifiSecFlag } from "../../../../../../redux/useFormWifiReducer";
import { useTypedSelector } from '../../../../../../redux/useTypedSelector.hook';

export const EnableWifiSecurityComponent: React.FunctionComponent = () => {
  const { wifiSec, wifi } = useTypedSelector(store => store.formWifi);
  const dispatch = useDispatch();

  const checkBoxHandler = () => {
    dispatch(setWifiSecFlag(!wifiSec))
  }

  return (
    <FormControlLabel
      disabled={wifi ? false : true}
      control={<Checkbox onChange={checkBoxHandler} checked={wifiSec} color="primary" />}
      label="Enable Wireless Security"
      labelPlacement="end"
    />
  )
}