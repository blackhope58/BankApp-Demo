import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const Login = ({navigation}) => {
  const [loginId, setLoginId] = useState('789455');
  const [loginPass, setLoginPass] = useState('123456');

  function loginControl() {
    if (loginId == '789455' && loginPass == '123456') {
      navigation.navigate('HomeTabRouter', {
        name: 'Can Erzurum',
        Amount: 5890000,
        unit: '£',
      });
    } else if (loginId == '458236' && loginPass == '123456') {
      navigation.navigate('HomeTabRouter', {
        name: 'Furkan Yılmaz',
        Amount: 265000,
        unit: '$',
      });
    } else if (loginId == '159856' && loginPass == '123456') {
      navigation.navigate('HomeTabRouter', {
        name: 'Mustafa Doğan',
        Amount: 4850000000,
        unit: '€',
      });
    } else {
      Alert.alert('Try Again...');
    }
  }

  return (
    <ImageBackground
      source={require('../../../assets/bg.jpg')}
      style={{width: w, height: h}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.textInput_container}>
          <View style={styles.loginId_container}>
            <TextInput
              style={{color: 'black', fontSize: 17}}
              placeholder={'564235'}
              placeholderTextColor={'#b5b5b5'}
              onChangeText={setLoginId}
            />
          </View>
          <View style={styles.loginPass_container}>
            <TextInput
              style={{color: 'black', fontSize: 17}}
              secureTextEntry={true}
              placeholder={'********'}
              placeholderTextColor={'#b5b5b5'}
              onChangeText={setLoginPass}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginButton_container}
          onPress={loginControl}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginWith_container}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Login with Penixa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 5}}>
          <Text>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
