import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  getCIDById,
  getEARFCNById,
  getLACById,
  getNETWORKById,
  getPLMNById,
  getTACById,
} from './db';

const Details = props => {
  const [CID, setCID] = useState('- - -');
  const [LAC, setLAC] = useState('- - -');
  const [PLMN, setPLMN] = useState('- - -');
  const [NETWORK, setNETWORK] = useState('- - -');
  const [TAC, setTAC] = useState('- - -');
  const [EARFCN, setEARFCN] = useState('- - -');
  useEffect(() => {
    if (props.id !== null) {
      getCIDById(props.id, e => setCID(e.value ? e.value : '- - -'));
      getLACById(props.id, e => setLAC(e.value ? e.value : '- - -'));
      getPLMNById(props.id, e => setPLMN(e.value ? e.value : '- - -'));
      getNETWORKById(props.id, e =>
        setNETWORK(e.value ? e.value + 'G' : '- - -'),
      );
      getTACById(props.id, e => setTAC(e.value ? e.value : '- - -'));
      getEARFCNById(props.id, e => setEARFCN(e.value ? e.value : '- - -'));
    }
  }, [props.id]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.id !== null}
      onRequestClose={props.onClose}>
      <Pressable onPress={props.onClose} style={styles.background}>
        <View style={styles.modalBody}>
          <ImageBackground
            style={styles.header}
            source={require('./assets/details.jpg')}>
            <Text style={styles.headerTitle}>Cell Detail</Text>
          </ImageBackground>
          <View style={styles.Details}>
            <View style={styles.item}>
              <Text style={styles.key}>CID:</Text>
              <Text style={styles.value}>{CID}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.key}>PLMN:</Text>
              <Text style={styles.value}>{PLMN}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.key}>LAC:</Text>
              <Text style={styles.value}>{LAC}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.key}>TAC:</Text>
              <Text style={styles.value}>{TAC}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.key}>EARFCN:</Text>
              <Text style={styles.value}>{EARFCN}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.key}>Network Type:</Text>
              <Text style={styles.value}>{NETWORK}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default Details;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    width: 300,
    overflow: 'hidden',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  header: {width: '100%', height: 120},
  headerTitle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  Details: {
    paddingTop: 12,
  },
  item: {
    flexDirection: 'row',
    height: 56,
    paddingHorizontal: 24,
  },
  key: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    color: '#62d3cb',
  },
  value: {
    fontSize: 16,
  },
});
