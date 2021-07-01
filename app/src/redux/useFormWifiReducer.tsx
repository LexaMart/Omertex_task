import { ACTIONS, FormWifiState, UserAction } from '../types/types'
const intialState: FormWifiState = {
  ipFlagWifi: false,
  dnsFlagWifi: false,
  wifi: false,
  wifiSec: false,
  ipAdressWifi: '',
  subMaskWifi: '',
  defGateawayWifi: '',
  prefDnsWifi: '',
  alterDnsWifi: '',
  wifiName: '',
  wifiKey: ''
}
export const useFormWifiReducer = (state = intialState, action: UserAction): FormWifiState => {
  switch (action.type) {
    case ACTIONS.SET_IP_WIFI_FLAG:
      return {
        ...state,
        ipFlagWifi: action.payload
      }
    case ACTIONS.SET_IP_WIFI_ADDRESS:
      return {
        ...state,
        ipAdressWifi: action.payload
      }
    case ACTIONS.SET_SUB_WIFI_MASK:
      return {
        ...state,
        subMaskWifi: action.payload
      }
    case ACTIONS.SET_DEF_WIFI_GATE:
      return {
        ...state,
        defGateawayWifi: action.payload
      }
    case ACTIONS.SET_DNS_WIFI_FLAG:
      return {
        ...state,
        dnsFlagWifi: action.payload
      }
    case ACTIONS.SET_PREF_WIFI_DNS:
      return {
        ...state,
        prefDnsWifi: action.payload
      }
    case ACTIONS.SET_ALTER_WIFI_DNS:
      return {
        ...state,
        alterDnsWifi: action.payload
      }
    case ACTIONS.SET_WIFI_FLAG:
      return {
        ...state,
        wifi: action.payload
      }
    case ACTIONS.SET_WIFI_SEC_FLAG:
      return {
        ...state,
        wifiSec: action.payload
      }
    case ACTIONS.SET_WIFI_NAME:
      return {
        ...state,
        wifiName: action.payload
      }
    case ACTIONS.SET_WIFI_KEY:
      return {
        ...state,
        wifiKey: action.payload
      }
    default:
      return state
  }
}

export const setWifiFlag = (wifiState: boolean) => ({
  type: ACTIONS.SET_WIFI_FLAG,
  payload: wifiState
})

export const setWifiSecFlag = (wifiSecState: boolean) => ({
  type: ACTIONS.SET_WIFI_SEC_FLAG,
  payload: wifiSecState
})

export const setWifiKey = (wifiKey: string) => ({
  type: ACTIONS.SET_WIFI_KEY,
  payload: wifiKey
})

export const setIpFlag = (ipState: boolean) => ({
  type: ACTIONS.SET_IP_WIFI_FLAG,
  payload: ipState
});

export const setIpAddress = (ipAddress: string) => ({
  type: ACTIONS.SET_IP_WIFI_ADDRESS,
  payload: ipAddress
});

export const setSubMask = (subMask: string) => ({
  type: ACTIONS.SET_SUB_WIFI_MASK,
  payload: subMask
});

export const setDefaultGate = (defGate: string) => ({
  type: ACTIONS.SET_DEF_WIFI_GATE,
  payload: defGate
});

export const setDnsFlag = (setDns: boolean) => ({
  type: ACTIONS.SET_DNS_WIFI_FLAG,
  payload: setDns
});

export const setPrefDns = (dns: string) => ({
  type: ACTIONS.SET_PREF_WIFI_DNS,
  payload: dns
});

export const setAlterDns = (alterDns: string) => ({
  type: ACTIONS.SET_ALTER_WIFI_DNS,
  payload: alterDns
});

export const setWifiName = (wifiName: string) => ({
  type: ACTIONS.SET_WIFI_NAME,
  payload: wifiName
});
