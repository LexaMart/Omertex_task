
import { useDispatch } from 'react-redux';
import { setWifiName } from '../../../../../redux/useFormReducer';
import { useTypedSelector } from './../../../../../redux/useTypedSelector.hook';

export const WirelessNameComponent: React.FunctionComponent = () => {
  const { wifi } = useTypedSelector(store => store.form);
  const dispatch = useDispatch();

  const wifiNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWifiName(event.target.value))
  };

  return (
    <div className='inputs'>
      <div className='inputs__block'>
        <label className='input__name required' style={wifi ? {} : { opacity: 0.5 }} > Wireless Network Name: </label>
        <input
          name='wifiName'
          className='form__input'
          disabled={wifi ? false : true}
          // style={prefDnsIsCorrect ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={wifiNameChangeHandler}
        />
      </div>
    </div>
  )
}