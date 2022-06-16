import {useQueryClient} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

export const useGetQueryState = <T = unknown>(
  key: (string | undefined)[],
  filter?: QueryFilters,
) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<T>(key, filter);
};
