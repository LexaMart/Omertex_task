import { ChangeEvent } from "react";

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
  SET_WIFI_SEC_FLAG = 'SET_WIFI_SEC_FLAG',
  SET_WIFI_KEY = 'SET_WIFI_KEY',
  SET_IP_WIFI_FLAG = 'SET_IP_WIFI_FLAG',
  SET_DNS_WIFI_FLAG = 'SET_DNS_WIFI_FLAG',
  SET_IP_WIFI_ADDRESS = 'SET_IP_WIFI_ADDRESS',
  SET_SUB_WIFI_MASK = 'SET_SUB_WIFI_MASK',
  SET_DEF_WIFI_GATE = 'SET_DEF_WIFI_GATE',
  SET_PREF_WIFI_DNS = 'SET_PREF_WIFI_DNS',
  SET_ALTER_WIFI_DNS = 'SET_ALTER_WIFI_DNS',
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

export interface FormWifiState {
  ipFlagWifi: boolean,
  dnsFlagWifi: boolean,
  wifi: boolean,
  wifiSec: boolean,
  ipAdressWifi: string,
  subMaskWifi: string,
  defGateawayWifi: string,
  prefDnsWifi: string,
  alterDnsWifi: string,
  wifiName: string,
  wifiKey: string,
}

export interface UserAction {
  type: String,
  payload: any
}

export interface InputState {
  label: string,
  inputValue: string,
  required: boolean,
  flag: boolean,
  callback: (event: ChangeEvent<HTMLInputElement>) => boolean | undefined,
}

export interface RadioState {
  labelFalse: string,
  labelTrue: string,
  flagName: string,
  flag: boolean,
  callback: (flag: string, value: string) => any,
}
