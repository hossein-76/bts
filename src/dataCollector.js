import Geolocation from 'react-native-geolocation-service';
import {
  getCID,
  getEARFCN,
  getPLMN,
  getTAC,
  getLAC,
  getNETWORK,
} from './networkData';
import {setCID, setEARFCN, setPLMN, setTAC, setLAC, setNETWORK} from './db';
import {ToastAndroid} from 'react-native';

const prePosition = {
  latitude: 0,
  longitude: 0,
};

export function collectData() {
  Geolocation.getCurrentPosition(
    position => {
      const diff = Math.sqrt(
        (position.coords.latitude - prePosition.latitude) ** 2 +
          (position.coords.longitude - prePosition.longitude) ** 2,
      );
      const id = new Date().getTime();
      if (diff > 0.003) {
        prePosition.latitude = position.coords.latitude;
        prePosition.longitude = position.coords.longitude;
        ToastAndroid.show('Setting new Data', ToastAndroid.SHORT);
        getCID(value => {
          setCID(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
        getEARFCN(value => {
          setEARFCN(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
        getPLMN(value => {
          setPLMN(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
        getTAC(value => {
          setTAC(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
        getLAC(value => {
          setLAC(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
        getNETWORK(value => {
          setNETWORK(
            id,
            position.coords.latitude,
            position.coords.longitude,
            value,
          );
        });
      } else {
        ToastAndroid.show('Not enough movement!', ToastAndroid.SHORT);
      }
    },
    error => {
      // See error code charts below.
      console.warn(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 25000, maximumAge: 10000},
  );
}
