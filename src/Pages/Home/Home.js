import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Home.style';
import {FakeCurrencyInput} from 'react-native-currency-input';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const Home = ({route, navigation}) => {
  let route_value = route.params.params;

  const [unit, setUnit] = useState(route_value.unit);
  const [value, setValue] = React.useState(2310.458);

  return (
    <ImageBackground
      source={require('../../../assets/bg2.jpg')}
      style={{width: w, height: h}}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header_text}>My Account</Text>
        </View>
        <View>
          <Text
            style={{color: 'black', fontWeight: '700', fontSize: 20, top: 70}}>
            Welcome {route_value.name}
          </Text>
        </View>
        <View style={styles.balance_container}>
          <FakeCurrencyInput
            style={styles.balance_text}
            value={route_value.Amount}
            onChangeValue={setValue}
            prefix={unit}
            delimiter=","
            separator="."
            precision={2}
            editable={false}
            onChangeText={formattedValue => {
              console.log(formattedValue); // R$ +2.310,46
            }}
          />
          <Text style={{color: 'black'}}>Account Balance</Text>
          <TouchableOpacity
            style={styles.sendPayment_button}
            onPress={() => {
              navigation.navigate('MoneyTransfer');
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Send Payment</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 35,
            }}>
            Transactions
          </Text>
        </View>

        <View style={styles.pastTransactions_container}>
          <View style={styles.pT_container}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Bank Transfer
              </Text>
              <Text style={{color: 'gray', fontSize: 15, textAlign: 'center'}}>
                21 JUN at 12pm
              </Text>
            </View>
            <View>
              <FakeCurrencyInput
                style={{
                  color: 'green',
                  fontSize: 20,
                  fontWeight: '800',
                }}
                value={route_value.Amount}
                onChangeValue={setValue}
                prefix={unit}
                delimiter=","
                separator="."
                precision={2}
                editable={false}
                onChangeText={formattedValue => {
                  console.log(formattedValue); // R$ +2.310,46
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
