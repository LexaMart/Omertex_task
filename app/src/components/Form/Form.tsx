import './Form.css';
import { EthernetComponent } from './formCopmponents/EternetComponent/EthernetComponent';

export const Form: React.FunctionComponent = () => {
  return (
    <div className='wrapper'>
      <form className='newtwork__form'>
        <EthernetComponent />
      </form>
    </div>
  )
}