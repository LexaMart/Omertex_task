import { CustomInput } from "../CustomInputComponent/InputCustomComponent";
import { EnableWifiComponent } from "./WirelessComponents/EnableWifiComponent/EnableWifiComponent";
import { EnableWifiSecurityComponent } from "./WirelessComponents/EnableWirelessSecurityComponent/EnableWirelessSecurityComponent";
import { WirelessNameComponent } from "./WirelessComponents/WirelessNameComponent/WirelessNameComponent";
import { useTypedSelector } from './../../../../redux/useTypedSelector.hook';
import { useDispatch } from "react-redux";
import { RadioButtons } from "../CustomRadioButtonsComponent/RadioButtonst";
import { setAlterDns, setDefaultGate, setDnsFlag, setIpAddress, setIpFlag, setPrefDns, setSubMask, setWifiKey } from "../../../../redux/useFormWifiReducer";

export const WirelessComponent: React.FunctionComponent = () => {
  const { wifiSec, ipFlagWifi, dnsFlagWifi, wifi } = useTypedSelector(store => store.formWifi);
  const dispatch = useDispatch();

  const validateInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'secKey':
        const secKeyRegExp = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/);
        if (secKeyRegExp.test(event.target.value)) {
          dispatch(setWifiKey(event.target.value));
          return (true);
        } else {
          dispatch(setWifiKey(''));
          return (false);
        }
      case 'ipWifi':
        const ipRegExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (ipRegExp.test(event.target.value)) {
          dispatch(setIpAddress(event.target.value));
          return (true);
        } else {
          dispatch(setIpAddress(''));
          return (false);
        }
      case 'subnetMaskWifi':
        const subnetMaskRegExp = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)
        if (subnetMaskRegExp.test(event.target.value)) {
          dispatch(setSubMask(event.target.value));
          return true;
        } else {
          dispatch(setSubMask(''));
          return false;
        }
      case 'defGateawayWifi':
        const defGateReg = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (defGateReg.test(event.target.value)) {
          dispatch(setDefaultGate(event.target.value));
          return true;
        } else {
          dispatch(setDefaultGate(''));
          return false;
        }
      case 'prefDnsWifi':
        const dnsExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (dnsExp.test(event.target.value)) {
          dispatch(setPrefDns(event.target.value));
          return true;
        } else {
          dispatch(setPrefDns(''));
          return false;
        }
      case 'alterDnsWifi':
        const alterDns = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
        if (alterDns.test(event.target.value)) {
          dispatch(setAlterDns(event.target.value));
          return (true);
        } else {
          dispatch(setAlterDns(''));
          return false
        }
      default:
        return false
    }
  }

  const radioHandler = (flagName: string, value: string) => {
    switch (flagName) {
      case 'ipWifi':
        if (value === 'true') {
          dispatch(setIpFlag(true));
        } else {
          dispatch(setIpFlag(false));
        }
        break;
      case 'dnsWifi':
        if (value === 'true') {
          dispatch(setDnsFlag(true));
        } else {
          dispatch(setDnsFlag(false));
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className='content__block'>
      <label className='block__title'>Wireless Settings</label>
      <EnableWifiComponent />
      <WirelessNameComponent />
      <EnableWifiSecurityComponent />
      <div className='inputs'>
        <CustomInput label={'Security Key'} required={true} inputValue={'secKey'} flag={wifiSec} callback={validateInputs} />
      </div>
      <RadioButtons disabled={!wifi} labelFalse={'Obtain an IP address automatically (DHCP/BoostP)'} labelTrue={'Use the following IP address'} flagName={'ipWifi'} flag={ipFlagWifi} callback={radioHandler} />
      <div className='inputs'>
        <CustomInput label={'IP Address'} required={true} inputValue={'ipWifi'} flag={ipFlagWifi} callback={validateInputs} />
        <CustomInput label={'Subnet Mask'} required={true} inputValue={'subnetMaskWifi'} flag={ipFlagWifi} callback={validateInputs} />
        <CustomInput label={'Default Gateaway'} required={false} inputValue={'defGateawayWifi'} flag={ipFlagWifi} callback={validateInputs} />
      </div>
      <RadioButtons disabled={!wifi} labelFalse={'Obtain DNS server address automatically'} labelTrue={'Use the following DNS server address'} flagName={'dnsWifi'} flag={dnsFlagWifi} callback={radioHandler} />
      <div className='inputs'>
        <CustomInput label={'Preffered DNS server'} required={true} inputValue={'prefDnsWifi'} flag={dnsFlagWifi} callback={validateInputs} />
        <CustomInput label={'Alternative DNS server'} required={false} inputValue={'alterDnsWifi'} flag={dnsFlagWifi} callback={validateInputs} />
      </div>
    </div>
  )
}