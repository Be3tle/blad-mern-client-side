import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: request = [] } = useQuery({
    queryKey: ['request', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requests?reqEmail=${user?.email}`);
      return res.data;
    },
  });

  return [request, refetch];
};

export default useRequest;
