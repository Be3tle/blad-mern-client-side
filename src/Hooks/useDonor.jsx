import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useDonor = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isDonor, isPending: isDonorLoading } = useQuery({
    queryKey: [user?.email, 'isDonor'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking is donor', user);
      const res = await axiosSecure.get(`/users/donor/${user.email}`);
      // console.log(res.data);
      return res.data?.donor;
    },
  });
  return [isDonor, isDonorLoading];
};

export default useDonor;
