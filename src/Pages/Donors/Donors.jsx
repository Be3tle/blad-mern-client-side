import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import DonorsCard from './DonorsCard';

const Donors = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axiosPublic.get(`/users`);
        setDonors(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user?.email) {
      fetchDonors();
    }
  }, [axiosPublic, user]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col pt-32">
        <div className="">
          {' '}
          {/* border-2 border-gray-700 rounded-lg border-opacity-10 p-10 */}
          <h1 className="text-2xl font-semibold mb-4 text-center">
            All Donors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2` gap-12">
            {donors.map((donor) => (
              <DonorsCard
                key={donor._id}
                donor={donor}
                donors={donors}
              ></DonorsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donors;
