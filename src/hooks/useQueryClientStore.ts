import {useQueryClient} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

export const useGetQueryState = (key: string, filter?: QueryFilters) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(key, filter);
};
