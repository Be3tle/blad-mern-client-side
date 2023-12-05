import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useVolunteer = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
    queryKey: [user?.email, 'isVolunteer'],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users/volunteer/${user.email}`);
        return res.data?.volunteer;
      } catch (error) {
        console.error('Error fetching volunteer status:', error);
        // Handle the error gracefully, and consider returning a default value
        return false;
      }
    },
  });
  return [isVolunteer, isVolunteerLoading];
};

export default useVolunteer;
