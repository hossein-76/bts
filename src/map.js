import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {MAP_TYPES, Marker, Circle} from 'react-native-maps';
import {getAllCID} from './db';

const Map = props => {
  const [CID, setCID] = useState();
  useEffect(() => {
    if (props.isActive) getAllCID(list => setCID(list));
  }, [props.isActive]);
  if (!props.isActive) return null;
  return (
    <MapView
      style={styles.container}
      rotateEnabled={false}
      initialRegion={{
        latitude: CID?.length ? CID[0].lat : 50.82722843945194,
        longitude: CID?.length ? CID[0].long : 10.729564228733146,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {CID?.map(item => (
        <Circle
          fillColor={'#ff0000'}
          strokeWidth={0}
          key={item.id}
          radius={25}
          center={{
            latitude: item.lat,
            longitude: item.long,
          }}
          title={item.value.toString()}
        />
      ))}
    </MapView>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
