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
    top: 10,
  },
  header_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
  button_container: {
    backgroundColor: '#f7f7f7',
    width: w / 1.2,
    height: h / 15,
    alignItems: 'center',
    borderRadius: 25,
    elevation: 5,
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 15,
  },
});
