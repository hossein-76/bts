import {NativeModules} from 'react-native';
const {SIM} = NativeModules;

export function getCID(callBack) {
  SIM.getCID(callBack);
}
export function getLAC(callBack) {
  SIM.getLAC(callBack);
}
export function getPLMN(callBack) {
  SIM.getPLMN(callBack);
}
export function getNetworkType(callBack) {
  SIM.getNetworkType(callBack);
}
export function getLength(callBack) {
  SIM.getLength(callBack);
}
export function getTAC(callBack) {
  SIM.getTAC(callBack);
}
export function getEARFCN(callBack) {
  SIM.getEARFCN(callBack);
}
