import {Dimensions, StyleSheet} from 'react-native';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 100,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logo_container: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  textInput_container: {
    marginTop: 50,
    width: w / 1.2,
    height: h / 5,
    justifyContent: 'center',
  },
  loginId_container: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    padding: 4,
  },
  loginPass_container: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20,
    elevation: 5,
    padding: 4,
  },
  loginButton_container: {
    backgroundColor: '#2bc48a',
    width: w / 1.7,
    height: w / 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWith_container: {
    marginTop: 10,
    backgroundColor: '#189465',
    width: w / 1.7,
    height: w / 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
