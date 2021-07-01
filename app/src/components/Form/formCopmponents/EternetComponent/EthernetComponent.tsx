import { RadioButtonsOne } from './components/RadioButtonsIpComponent/RadioButtonstIp';
import './Ethernet.css';
import { IpInputs } from './components/IpInputsComponent/IpInputs';
import { RadioButtonsTwo } from './components/RadioButtonsDnsComponent/RadioButtonsDns';
import { DnsInputs } from './components/DnsInputsComponents/DnsInputs';


export const EthernetComponent: React.FunctionComponent = () => {

  return (
    <div className='content__block'>
      <label className='block_title'>Ethernet Settings</label>
      <RadioButtonsOne />
      <IpInputs />
      <RadioButtonsTwo />
      <DnsInputs />
    </div>
  )
}