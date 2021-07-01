import { RadioButtonsOne } from './components/RadioButtonsIpComponent/RadioButtonstIp';
import './Ethernet.css';
import { IpInputs } from './components/IpInputsComponent/IpInputs';
import { RadioButtonsTwo } from './components/RadioButtonsDnsComponent/RadioButtonsDns';


export const EthernetComponent: React.FunctionComponent = () => {

  return (
    <div className='ehernet__block'>
      <label className='block_title'>Ehernet Settings</label>
      <RadioButtonsOne />
      <IpInputs />
      <RadioButtonsTwo />
    </div>
  )
}