import './Form.css';
import { EthernetComponent } from './formCopmponents/EternetComponent/EthernetComponent';
import { WirelessComponent } from './formCopmponents/WirelessComponents/WirelessComponent';

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