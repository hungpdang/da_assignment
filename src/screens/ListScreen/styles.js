import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eachItem: {
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    padding: 10,
  },
  imageStyle: {
    width: '100%',
    height: '90%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
