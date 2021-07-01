import { ACTIONS, FormEthernetState, UserAction } from '../types/types'
const intialState: FormEthernetState = {
  ipFlag: false,
  dnsFlag: false,
  wifi: false,
  ipAdress: '',
  subMask: '',
  defGateaway: '',
  prefDns: '',
  alterDns: '',
  wifiName: '',
}
export const useFormEhernetReducer = (state = intialState, action: UserAction): FormEthernetState => {
  switch (action.type) {
    case ACTIONS.SET_IP_FLAG:
      return {
        ...state,
        ipFlag: action.payload
      }
    case ACTIONS.SET_IP_ADDRESS:
      return {
        ...state,
        ipAdress: action.payload
      }
    case ACTIONS.SET_SUB_MASK:
      return {
        ...state,
        subMask: action.payload
      }
    case ACTIONS.SET_DEF_GATE:
      return {
        ...state,
        subMask: action.payload
      }
    case ACTIONS.SET_DNS_FLAG:
      return {
        ...state,
        dnsFlag: action.payload
      }
    case ACTIONS.SET_PREF_DNS:
      return {
        ...state,
        prefDns: action.payload
      }
    case ACTIONS.SET_ALTER_DNS:
      return {
        ...state,
        alterDns: action.payload
      }
    case ACTIONS.SET_WIFI_FLAG:
      return {
        ...state,
        wifi: action.payload
      }
    case ACTIONS.SET_WIFI_NAME:
      return {
        ...state,
        wifiName: action.payload
      }
    default:
      return state
  }
}

export const setWifiFlag = (wifiState: boolean) => ({
  type: ACTIONS.SET_WIFI_FLAG,
  payload: wifiState
})

export const setIpFlag = (ipState: boolean) => ({
  type: ACTIONS.SET_IP_FLAG,
  payload: ipState
});

export const setIpAddress = (ipAddress: string) => ({
  type: ACTIONS.SET_IP_ADDRESS,
  payload: ipAddress
});

export const setSubMask = (subMask: string) => ({
  type: ACTIONS.SET_SUB_MASK,
  payload: subMask
});

export const setDefaultGate = (defGate: string) => ({
  type: ACTIONS.SET_SUB_MASK,
  payload: defGate
});

export const setDnsFlag = (setDns: boolean) => ({
  type: ACTIONS.SET_DNS_FLAG,
  payload: setDns
});

export const setPrefDns = (dns: string) => ({
  type: ACTIONS.SET_PREF_DNS,
  payload: dns
});

export const setAlterDns = (alterDns: string) => ({
  type: ACTIONS.SET_ALTER_DNS,
  payload: alterDns
});

export const setWifiName = (wifiName: string) => ({
  type: ACTIONS.SET_WIFI_NAME,
  payload: wifiName
});
