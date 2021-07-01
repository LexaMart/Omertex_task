export enum ACTIONS {
  SET_IP_FLAG = 'SET_IP_FLAG',
  SET_DNS_FLAG = 'SET_DNS_FLAG',
  SET_IP_ADDRESS = 'SET_IP_ADDRESS',
  SET_SUB_MASK = 'SET_SUB_MASK',
  SET_DEF_GATE = 'SET_DEF_GATE',
  SET_PREF_DNS = 'SET_PREF_DNS',
  SET_ALTER_DNS = 'SET_ALTER_DNS',
  SET_WIFI_FLAG = 'SET_WIFI_FLAG',
  SET_WIFI_NAME = 'SET_WIFI_NAME',
}

export interface FormEthernetState {
  ipFlag: boolean,
  dnsFlag: boolean,
  wifi: boolean,
  ipAdress: string,
  subMask: string,
  defGateaway: string,
  prefDns: string,
  alterDns: string,
  wifiName: string,
}

export interface UserAction {
  type: String,
  payload: any
}