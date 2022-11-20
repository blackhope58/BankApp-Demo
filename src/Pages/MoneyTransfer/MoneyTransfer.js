import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './MoneyTransfer.style';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const MoneyTransfer = ({navigation, route}) => {
  let route_value = route.params.params;

  const [sendPayment, setSendPayment] = useState(false);
  const [amount, setAmount] = useState('0');
  const [sendAmount, sendSetAmount] = useState('0');

  const [receiver, setReceiver] = useState('');

  const [loadingText, setLoadingText] = useState('Sending...');

  const [sendingMoneyText, setSendingMoneyText] = useState(false);
  const [sendingMoney, setSendingMoney] = useState(true);
  const [sendBanks, setSendBanks] = useState(false);

  function sendPaymentFun() {
    if (amount != '0') {
      sendSetAmount(route_value.Amount - amount);
      setSendPayment(true);
      setSendBanks(true);
      Keyboard.dismiss();
    } else {
      Alert.alert('Enter amount');
    }
  }

  function sendMoneyLoading() {
    setSendingMoney(false);
    setSendBanks(false);
  }
  function sendMoney() {
    setSendingMoney(true);
    setSendingMoneyText(true);
    setTimeout(() => {
      navigation.push('HomeTabRouter', {
        name: route_value.name,
        Amount: sendAmount,
        unit: route_value.unit,
      });
    }, 500);
  }

  return (
    <ImageBackground
      source={require('../../../assets/bg2.jpg')}
      style={{width: w, height: h}}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header_text}>Transfering Money</Text>
        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
          {sendingMoneyText ? (
            <Text style={styles.loaingText_text}>{loadingText}</Text>
          ) : null}
          {sendingMoney ? null : (
            <View style={styles.balance_container2}>
              <Text style={styles.amount}>
                Send {amount} {route_value.unit}
              </Text>
              <Text style={styles.receiver}>Receiver : {receiver}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.sendPayment_button2}
                  onPress={sendMoney}>
                  <Text style={{color: 'white', fontSize: 17}}>Ok</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.sendPayment_button_no, {marginLeft: 10}]}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 17,
                      fontWeight: '600',
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {sendPayment ? null : (
            <View style={styles.balance_container}>
              <View style={styles.amount_textInput}>
                <TextInput
                  style={{color: 'black', fontWeight: 'bold'}}
                  placeholder={'00,00'}
                  placeholderTextColor={'#b5b5b5'}
                  keyboardType={'number-pad'}
                  onChangeText={setAmount}
                />
              </View>

              <TouchableOpacity
                style={styles.sendPayment_button}
                onPress={sendPaymentFun}>
                <Text style={{color: 'white', fontSize: 15}}>Send Payment</Text>
              </TouchableOpacity>
            </View>
          )}
          {sendBanks ? (
            <View style={styles.banks_container}>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('Deniz Bank');
                }}>
                <Image
                  source={require('../../../assets/banks/deniz.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>Deniz Bank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('Qnb Bank');
                }}>
                <Image
                  source={require('../../../assets/banks/qnb.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>Qnb Bank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('AkBank');
                }}>
                <Image
                  source={require('../../../assets/banks/akbank.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>Akbank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('İş Bank');
                }}>
                <Image
                  source={require('../../../assets/banks/is.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>İş Bank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('Ziraat Bank');
                }}>
                <Image
                  source={require('../../../assets/banks/ziraat.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>Ziraat Bank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.OnlyBanks_container}
                onPress={() => {
                  sendMoneyLoading();
                  setReceiver('YapıKredi Bank');
                }}>
                <Image
                  source={require('../../../assets/banks/yapi.jpg')}
                  style={styles.banks_logo}
                />
                <Text style={styles.banks_text}>YapıKredi Bank</Text>
                <Image
                  source={require('../../../assets/sendicon.png')}
                  style={styles.sendicon}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </ImageBackground>
  );
};

export default MoneyTransfer;

//Deniz qnb akbank iş ziraat yapı kredi
