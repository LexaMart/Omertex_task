import './Form.css';
import { Button } from '@material-ui/core';
import { WirelessComponent } from './FormCopmponents/Wireless/WirelessComponent';
import { useTypedSelector } from './../../redux/useTypedSelector.hook';
import { ObjectToSend } from '../../types/types';
import { useState } from 'react';
import { EthernetComponent } from './FormCopmponents/Ethernet/EthernetComponent';
import { useEffect } from 'react';

export const Form: React.FunctionComponent = () => {
  const [verified, setVerified] = useState<boolean>(true);
  const [objectToSend, setObjectToSend] = useState<ObjectToSend>({
    ipAdress: '',
    subMask: '',
    defGateaway: '',
    prefDns: '',
    alterDns: '',
    ipAdressWifi: '',
    subMaskWifi: '',
    defGateawayWifi: '',
    prefDnsWifi: '',
    alterDnsWifi: '',
    wifiName: '',
    wifiKey: '',
  });

  const ethernetStore = useTypedSelector(store => store.formEthernet);
  const wifiStore = useTypedSelector(store => store.formWifi);

  const resetHandler = () => {
    window.location.reload();
  };

  const sumbitHandler = () => {
    if (verified) {
      console.log(objectToSend);
    } else {
      alert('Fields have an incorrect values, fix it and retry!');
    }
  }
  const validateEthernetIpData = (): boolean => {
    if (ethernetStore.ipFlag && (ethernetStore.ipAdress === '' || ethernetStore.subMask === '')) {
      return false;
    } else return true;
  };
  const validateEthernetDnsData = (): boolean => {
    if (ethernetStore.dnsFlag && ethernetStore.prefDns === '') {
      return false;
    } else return true
  };

  const validateWifiName = (): boolean => {
    if (wifiStore.wifi && wifiStore.wifiName === '') {
      return false;
    } else return true;
  };

  const validateWifiPassword = (): boolean => {
    if (wifiStore.wifi && wifiStore.wifiSec && wifiStore.wifiKey === '') {
      return false;
    } else return true;
  };

  const validateWifiIp = (): boolean => {
    if (wifiStore.ipFlagWifi && wifiStore.wifi && (wifiStore.ipAdressWifi === '' || wifiStore.subMaskWifi === '')) {
      return false
    } else return true;
  };

  const validateWifiDnsData = (): boolean => {
    if (wifiStore.dnsFlagWifi && wifiStore.wifi && wifiStore.prefDnsWifi === '') {
      return false;
    } else return true;
  };

  const ipAdressWifiSetter = (): string => {
    if (wifiStore.wifi && wifiStore.ipFlagWifi) {
      return wifiStore.ipAdressWifi;
    }
    else if (wifiStore.wifi && !wifiStore.ipFlagWifi) {
      return '111.111.111.111'
    }
    else return '';
  };

  const subnetMaskWifi = (): string => {
    if (wifiStore.wifi && wifiStore.ipFlagWifi) {
      return wifiStore.subMaskWifi;
    }
    else if (wifiStore.wifi && !wifiStore.ipFlagWifi) {
      return '255.255.255.255'
    }
    else return '';
  };

  const prefDnsWifi = (): string => {
    if (wifiStore.wifi && wifiStore.dnsFlagWifi) {
      return wifiStore.prefDnsWifi;
    }
    else if (wifiStore.wifi && !wifiStore.dnsFlagWifi) {
      return '9.9.9.9'
    }
    else return '';
  };

  useEffect(() => {
    if (validateEthernetIpData()
      && validateEthernetDnsData()
      && validateWifiName()
      && validateWifiPassword()
      && validateWifiIp()
      && validateWifiDnsData()) {
      setVerified(true);
      setObjectToSend({
        ipAdress: ethernetStore.ipFlag ? ethernetStore.ipAdress : '1.1.1.1',
        subMask: ethernetStore.ipFlag ? ethernetStore.subMask : '255.255.255.255',
        defGateaway: ethernetStore.ipFlag ? ethernetStore.defGateaway : '255.0.0.0',
        prefDns: ethernetStore.dnsFlag ? ethernetStore.prefDns : '0.0.0.0',
        alterDns: ethernetStore.alterDns ? ethernetStore.alterDns : '0.0.0.0',
        ipAdressWifi: ipAdressWifiSetter(),
        subMaskWifi: subnetMaskWifi(),
        defGateawayWifi: wifiStore.wifi && wifiStore.ipFlagWifi ? wifiStore.defGateawayWifi : '',
        prefDnsWifi: prefDnsWifi(),
        alterDnsWifi: wifiStore.wifi && wifiStore.dnsFlagWifi ? wifiStore.alterDnsWifi : '',
        wifiName: wifiStore.wifi ? wifiStore.wifiName : '',
        wifiKey: wifiStore.wifi && wifiStore.wifiSec ? wifiStore.wifiKey : '',
      })
    } else setVerified(false);
    window.onbeforeunload = function () {
      return false;
    };
  }, [ethernetStore, wifiStore]);

  return (
    <div className='wrapper'>
      <form className='newtwork__form'>
        <div className='settings__block'>
          <EthernetComponent />
          <WirelessComponent />
        </div>
        <div className='submit__btn'>
          <Button onClick={sumbitHandler} className='buttons' variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={resetHandler} className='buttons' variant="outlined" color='primary'>Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}