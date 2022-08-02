import { queryClient } from '@api/QueryClient';
import { QueryKey } from '@tanstack/query-core/src/types';
import { useMutation } from '@tanstack/react-query';

export const useGenericMutation = (
	func: (data: any) => any,
	queryKey: QueryKey,
	updater?: ((oldData: any, newData: any) => void) | undefined
) => {
	return useMutation(func, {
		onError: async () => {
			await queryClient.invalidateQueries(queryKey, { exact: true });
			await queryClient.cancelQueries(queryKey);
		},
		onSuccess: async (data: any) => {
			queryClient.setQueryData([queryKey[0], data.id], data);
			queryClient.setQueryData(queryKey!, (oldData: unknown) => {
				if (oldData && updater) {
					return updater(oldData!, data);
				} else {
					return [];
				}
			});
		},
	});
};
