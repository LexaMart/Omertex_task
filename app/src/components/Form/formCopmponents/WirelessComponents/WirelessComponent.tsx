
import { EnableWifiComponent } from './WirelessComponents/EnableWifiComponent/EnableWifiComponent';
import { WirelessNameComponent } from './WirelessNameComponent/WirelessNameComponent';
export const WirelessComponent: React.FunctionComponent = () => {
  return (
    <div className='content__block'>
      <label className='block_title'>Wireless Settings</label>
      <EnableWifiComponent />
      <WirelessNameComponent />
    </div>
  )
}