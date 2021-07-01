import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../../redux/useTypedSelector.hook";
import { setPrefDns, setAlterDns } from './../../../../../../redux/useFormReducer';

export const DnsInputs: React.FunctionComponent = () => {

  const [prefDnsIsCorrect, setprefDnsIsCorrect] = useState<boolean>(true)
  const [alterDnsIsCorrect, setalterDnsIsCorrect] = useState<boolean>(true)
  const { dnsFlag } = useTypedSelector(store => store.form);
  const dispatch = useDispatch();

  const validateInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'prefDns':
        const dnsExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (dnsExp.test(event.target.value)) {
          dispatch(setPrefDns(event.target.value));
          setprefDnsIsCorrect(true);
        } else {
          setprefDnsIsCorrect(false);
        }
        break;
      case 'alterDns':
        const subnetMaskRegExp = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)
        if (subnetMaskRegExp.test(event.target.value)) {
          dispatch(setAlterDns(event.target.value));
          setalterDnsIsCorrect(true);
        } else {
          setalterDnsIsCorrect(false)
        }
        break;
      default:
        break
    }
  }

  return (
    <div className='inputs'>
      <div className='inputs__block'>
        <label className='input__name required' style={dnsFlag ? {} : { opacity: 0.5 }} > Preffered DNS server: </label>
        <input
          name='prefDns'
          className='form__input'
          disabled={dnsFlag ? false : true}
          style={prefDnsIsCorrect ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={validateInputs}
        />
      </div>
      <div className='inputs__block'>
        <label className='input__name ' style={dnsFlag ? {} : { opacity: 0.5 }} > Alternative DNS server: </label>
        <input
          name='alterDns'
          className='form__input'
          disabled={dnsFlag ? false : true}
          style={alterDnsIsCorrect ? {} : { color: "rgb(240, 38, 38)" }}
          onChange={validateInputs}
        />
      </div>
    </div>
  )
}