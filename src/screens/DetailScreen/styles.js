import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
});
