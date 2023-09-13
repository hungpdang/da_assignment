import {useQuery} from '@tanstack/react-query';
import {fetchPhotos} from '../api';

export const usePhotos = page => {
  const {data, isLoading, isError, refetch} = useQuery(
    ['photos', page],
    () => fetchPhotos(page),
    {
      enabled: true,
      retry: false,
    },
  );
  return {data, isLoading, isError, refetch};
};
