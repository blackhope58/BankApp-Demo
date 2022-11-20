import {Dimensions, StyleSheet} from 'react-native';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header_container: {
    width: w,
    height: h / 11,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  header_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
  balance_container: {
    backgroundColor: '#f7f7f7',
    width: w / 1.2,
    height: h / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
    marginTop: 90,
  },
  balance_text: {
    color: 'black',
    fontSize: w / 13,
    fontWeight: '700',
  },
  sendPayment_button: {
    backgroundColor: '#F99E1D',
    width: w / 2.8,
    height: h / 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pastTransactions_container: {
    width: w,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pT_container: {
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-around',
    width: w / 1.2,
    height: h / 7,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    justifyContent: 'center',
  },
});
