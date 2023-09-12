import React, {useState, useCallback, useEffect} from 'react';
import DataContext from './DataContext';
import {usePhotos} from '../hooks/usePhoto';

const DataProvider = ({children}) => {
  const [page, setPage] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {data: newData, isLoading, isError, refetch} = usePhotos(page);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Append new data function
  const appendData = useCallback(newEntries => {
    setData(prevData => [...prevData, ...newEntries]);
  }, []);

  const nextPage = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const refreshData = useCallback(async () => {
    setIsRefreshing(true);

    // Reset the data
    setData([]);

    // Reset the page to the initial state
    setPage(0);
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    if (newData) {
      appendData(newData);
    }
  }, [newData, appendData]);

  return (
    <DataContext.Provider
      value={{
        data,
        isLoading,
        isError,
        nextPage,
        refreshData,
        isRefreshing,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
