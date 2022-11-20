import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Settings.style';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const Settings = () => {
  return (
    <ImageBackground
      source={require('../../../assets/bg2.jpg')}
      style={{width: w, height: h}}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header_text}>Settings</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button_container} onPress={null}>
            <Icon name={'key'} size={20} color={'#3733BF'} />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 19,
                paddingLeft: 15,
              }}>
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_container} onPress={null}>
            <Icon2 name={'time'} size={20} color={'#3733BF'} />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 19,
                paddingLeft: 15,
              }}>
              Change Time Zone
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_container} onPress={null}>
            <Icon name={'chart-line'} size={20} color={'#3733BF'} />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 19,
                paddingLeft: 15,
              }}>
              Limits
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_container} onPress={null}>
            <Icon name={'exchange-alt'} size={20} color={'#3733BF'} />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 19,
                paddingLeft: 15,
              }}>
              Exchange
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_container} onPress={null}>
            <Icon name={'money-bill-alt'} size={20} color={'#3733BF'} />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 19,
                paddingLeft: 15,
              }}>
              Payments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Settings;
