import Geolocation from 'react-native-geolocation-service';
import {getCID, getLength} from './networkData';
import {setCID} from './db';
import {ToastAndroid, Vibration} from 'react-native';

const cid = {
  latitude: 0,
  longitude: 0,
};

export function collectData() {
  Geolocation.getCurrentPosition(
    position => {
      const diff = Math.sqrt(
        (position.coords.latitude - cid.latitude) ** 2 +
          (position.coords.longitude - cid.longitude) ** 2,
      );
      if (diff > 0.003) {
        getCID(value => {
          ToastAndroid.show('Setting new CID ' + value, ToastAndroid.SHORT);
          cid.latitude = position.coords.latitude;
          cid.longitude = position.coords.longitude;
          setCID(position.coords.latitude, position.coords.longitude, value);
        });
        getLength(value => {
          if (value !== 0) {
            Vibration.vibrate([3000, 3000, 3000]);
            alert(value);
          }
          console.warn(value);
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
