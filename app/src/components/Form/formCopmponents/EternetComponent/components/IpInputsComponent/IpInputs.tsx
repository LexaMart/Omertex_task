import './IpInputs.css';
import { useTypedSelector } from './../../../../../../redux/useTypedSelector.hook';
import { useDispatch } from 'react-redux';
import { setIpAddress, setSubMask } from '../../../../../../redux/useFormReducer';
import { useState } from 'react';
import { setDefaultGate } from './../../../../../../redux/useFormReducer';

export const IpInputs: React.FunctionComponent = () => {
  const [ipIsCorrect, setIpIsCorrect] = useState<boolean>(true)
  const [subMaskIsCorrect, setSubMaskIsCorrect] = useState<boolean>(true)
  const [DefGateaway, setDefGateaway] = useState<boolean>(true)
  const { ipFlag } = useTypedSelector(store => store.form);
  const dispatch = useDispatch();

  const validateInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'ip':
        const ipRegExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (ipRegExp.test(event.target.value)) {
          dispatch(setIpAddress(event.target.value));
          setIpIsCorrect(true);
        } else {
          setIpIsCorrect(false);
        }
        break;
      case 'subnetMask':
        const subnetMaskRegExp = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)
        if (subnetMaskRegExp.test(event.target.value)) {
          dispatch(setSubMask(event.target.value));
          setSubMaskIsCorrect(true);
        } else {
          setSubMaskIsCorrect(false)
        }
        break;
      case 'defGateaway':
        const defGateReg = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (defGateReg.test(event.target.value)) {
          dispatch(setDefaultGate(event.target.value));
          setDefGateaway(true);
        } else {
          setDefGateaway(false);
        }
        break;
      default:
        break
    }
  }

  return (
    <div className='ip__inputs'>
      <div className='inputs__block'>
        <label className='input__name required' style={ipFlag ? {} : { opacity: 0.5 }} > IP Address </label>
        <input
          name='ip'
          className='form__input'
          disabled={ipFlag ? false : true}
          style={ipIsCorrect ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={validateInputs}
        />
      </div>
      <div className='inputs__block'>
        <label className='input__name required' style={ipFlag ? {} : { opacity: 0.5 }} > Subnet Mask </label>
        <input
          name='subnetMask'
          className='form__input'
          disabled={ipFlag ? false : true}
          style={subMaskIsCorrect ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={validateInputs}
        />
      </div>
      <div className='inputs__block'>
        <label className='input__name' style={ipFlag ? {} : { opacity: 0.5 }} > Default Gateaway </label>
        <input
          name='defGateaway'
          className='form__input'
          disabled={ipFlag ? false : true}
          style={DefGateaway ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={validateInputs}
        />
      </div>
    </div>
  )
}