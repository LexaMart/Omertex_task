import { ACTIONS, FormEthernetState, UserAction } from '../types/types'
const intialState: FormEthernetState = {
  ipFlag: false,
  dnsFlag: false,
  ipAdress: '',
  subMask: '',
  defGateaway: '',
  prefDns: '',
  alterDns: '',
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
    default:
      return state
  }
}

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

