import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

const DetailScreen = ({navigation, route}) => {
  const id = route.params.id;
  const {data} = useContext(DataContext);
  const item = data.find(item => item.id === id);
  return (
    <View style={styles.container}>
      <FastImage source={{uri: item.url}} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
