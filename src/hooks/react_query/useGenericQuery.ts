import { queryClient } from '@api/QueryClient';
import { QueryKey } from '@tanstack/query-core/src/types';
import { useQuery } from '@tanstack/react-query';

export const useGenericQuery = (
	queryKey: QueryKey,
	queryFn: (data: any) => void,
	options?: any
) => {
	return useQuery(queryKey, queryFn, {
		...options,
		onSuccess: (data: unknown) => {
			queryClient.setQueryData(queryKey, data);
		},
	});
};
