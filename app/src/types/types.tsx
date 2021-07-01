export enum ACTIONS {
  SET_IP_FLAG = 'SET_IP_FLAG'
}

export interface FormEthernetState {
  ipFlag: boolean,
  dnsFlag: boolean,
  ipAdress: string,
  subMask: string,
  defGateaway: string,
  prefDns: string,
  alterDns: string,
}

export interface UserAction {
  type: String,
  payload: any
}