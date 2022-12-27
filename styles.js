import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    width: width,
    height: height * 0.28,
    backgroundColor: '#810AD0',
    paddingTop: getStatusBarHeight(),
    justifyContent: 'center',
    paddingHorizontal: 25
  },

  headerInfoUser: {
    width: '100%',
    height: height * 0.09,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  user: {
    width: height * 0.09,
    height: height * 0.09,
    borderRadius: height * 0.09,
    backgroundColor: '#9B04FE',
    justifyContent: 'center',
    alignItems: 'center'
  },

  utils: {
    width: '42%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameUser: {
    width: '100%',
    height: height * 0.09,
    justifyContent: 'center',
  },

  nome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500'
  },

  contaUser: {
    width: width,
    height: height * 0.7,
    borderWidth: 1,
    paddingTop: 20,
  },

  buttonConta: {
  },

  acoesConta: {
    paddingLeft: 30,
    marginTop: 30,
  }
});