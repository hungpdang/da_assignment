import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useContext} from 'react';
import DataContext from '../../context/DataContext';
import {styles} from './styles';
import ProgressiveFastImage from '@freakycoder/react-native-progressive-fast-image';
import {routes} from '../../routes';
import SearchBar from '../../components/SearchBar';

const THRESH_HOLD = 4;

const ListScreen = ({navigation}) => {
  const {
    data,
    nextPage,
    isLoading,
    isError,
    refreshData,
    isRefreshing,
    searchQuery,
    setSearchQuery,
  } = useContext(DataContext);
  const filteredData = data.filter(item => item.title.includes(searchQuery));

  const goToDetail = useCallback(item => {
    navigation.navigate(routes.DETAIL_SCREEN, {
      id: item.id,
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.eachItem}
        onPress={() => goToDetail(item)}>
        <ProgressiveFastImage
          source={{
            uri: item?.url,
          }}
          style={styles.imageStyle}
          loadingSource={require('../../assets/gif/loading.gif')}
          imageAnimationDuration={2000}
          loadingImageStyle={{width: '100%', height: '100%'}}
        />
        <Text>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    if (isError) return null;
    if (isLoading) {
      return <ActivityIndicator size="large" color="#000" />;
    } else return null;
  };

  const onReachEnd = () => {
    if (filteredData.length > THRESH_HOLD) {
      nextPage();
    }
  };

  const renderEmptyComponent = () => {
    if (isError) {
      return (
        <View style={styles.emptyContainer}>
          <Text>Something went wrong!</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyContainer}>
          <Text>No data found!</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {filteredData.length > 0 && (
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      )}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={onReachEnd}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
        }
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default ListScreen;
