import { MenuItem, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setWifiName } from '../../../../../../redux/useFormWifiReducer';
import { useTypedSelector } from '../../../../../../redux/useTypedSelector.hook';
import './WirelessName.css'

export const WirelessNameComponent: React.FunctionComponent = () => {
  const { wifi, wifiName } = useTypedSelector(store => store.formWifi);
  const dispatch = useDispatch();

  const wifiNameChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setWifiName(event.target.value as string))
  };

  return (
    <div className='inputs'>
      <div className='inputs__block'>
        <label className='input__name required' style={wifi ? {} : { opacity: 0.5 }} > Wireless Network Name: </label>
        <Select
          className='wireless__selector'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          disabled={wifi ? false : true}
          value={wifiName}
          onChange={wifiNameChangeHandler}
        >
          <MenuItem value={'TP-link1225'}>TP-link1225</MenuItem>
          <MenuItem value={'TP-link15'}>TP-link15</MenuItem>
          <MenuItem value={'LexaMart'}>LexaMart</MenuItem>
        </Select>
      </div>
    </div>
  )
}