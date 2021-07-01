import { ACTIONS, FormEthernetState, UserAction } from '../types/types'
const intialState: FormEthernetState = {
  ipFlag: false,
  dnsFlag: false,
  ipAdress: '',
  subMask: '',
  defGateaway:'',
  prefDns: '',
  alterDns: '',
}
export const useFormEhernetReducer = (state = intialState, action: UserAction): FormEthernetState => {
  switch (action.type) {
    case ACTIONS.SET_IP_FLAG:
      return {
        ...state,
        ipFlag: !state.ipFlag
      }
    default:
      return state
  }
}

