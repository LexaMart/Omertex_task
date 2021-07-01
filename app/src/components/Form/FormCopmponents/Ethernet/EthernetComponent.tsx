import { RadioButtons } from '../CustomRadioButtonsComponent/RadioButtonst';
import './Ethernet.css';
import { useDispatch } from 'react-redux';
import { setAlterDns, setDefaultGate, setDnsFlag, setIpAddress, setIpFlag, setPrefDns, setSubMask } from '../../../../redux/useFormEthernetReducer';
import { CustomInput } from '../CustomInputComponent/InputCustomComponent';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';


export const EthernetComponent: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { ipFlag, dnsFlag } = useTypedSelector(store => store.formEthernet);

  const radioHandler = (flagName: string, value: string) => {
    switch (flagName) {
      case 'ip':
        if (value === 'true') {
          dispatch(setIpFlag(true))
        } else {
          dispatch(setIpFlag(false))
        }
        break;
      case 'dns':
        if (value === 'true') {
          dispatch(setDnsFlag(true))
        } else {
          dispatch(setDnsFlag(false))
        }
        break;
      default:
        break;
    }
  }

  const validateInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'ip':
        const ipRegExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (ipRegExp.test(event.target.value)) {
          dispatch(setIpAddress(event.target.value));
          return (true);
        } else {
          return (false);
        }
      case 'subnetMask':
        const subnetMaskRegExp = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)
        if (subnetMaskRegExp.test(event.target.value)) {
          dispatch(setSubMask(event.target.value));
          return true;
        } else {
          return false
        }
      case 'defGateaway':
        const defGateReg = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (defGateReg.test(event.target.value)) {
          dispatch(setDefaultGate(event.target.value));
          return true;
        } else {
          return false;
        }
      case 'prefDns':
        const dnsExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (dnsExp.test(event.target.value)) {
          dispatch(setPrefDns(event.target.value));
          return true;
        } else {
          return false;
        }
      case 'alterDns':
        const alterDns = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (alterDns.test(event.target.value)) {
          dispatch(setAlterDns(event.target.value));
          return (true);
        } else {
          return false
        }
      default:
        return false
    }
  }

  return (
    <div className='content__block'>
      <label className='block_title'>Ethernet Settings</label>
      <RadioButtons labelFalse={'Obtain an IP address automatically (DHCP/BoostP)'} labelTrue={'Use the following IP address'} flagName={'ip'} flag={ipFlag} callback={radioHandler} />
      <div className='inputs'>
        <CustomInput label={'IP Address'} required={true} inputValue={'ip'} flag={ipFlag} callback={validateInputs} />
        <CustomInput label={'Subnet Mask'} required={true} inputValue={'subnetMask'} flag={ipFlag} callback={validateInputs} />
        <CustomInput label={'Default Gateaway'} required={false} inputValue={'defGateaway'} flag={ipFlag} callback={validateInputs} />
      </div>
      <RadioButtons labelFalse={'Obtain DNS server address automatically'} labelTrue={'Use the following DNS server address'} flagName={'dns'} flag={dnsFlag} callback={radioHandler} />
      <div className='inputs'>
        <CustomInput label={'Preffered DNS server'} required={true} inputValue={'prefDns'} flag={dnsFlag} callback={validateInputs} />
        <CustomInput label={'Alternative DNS server'} required={false} inputValue={'alterDns'} flag={dnsFlag} callback={validateInputs} />
      </div>
    </div>
  )
}