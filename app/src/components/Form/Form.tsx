import './Form.css';
import { EthernetComponent } from './FormCopmponents/Ethernet/EthernetComponent';
import { WirelessComponent } from './FormCopmponents/Wireless/WirelessComponent';

export const Form: React.FunctionComponent = () => {
  return (
    <div className='wrapper'>
      <form className='newtwork__form'>
        <EthernetComponent />
        <WirelessComponent />
      </form>
    </div>
  )
}