import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import DonorsCard from './DonorsCard';

const Donors = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = () => {
    const filteredDonors = donors.filter(
      (donor) =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDonors(filteredDonors);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col pt-32">
        <div className="">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            All Donors
          </h1>
          <div className="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search by name or blood group"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input mr-2 rounded-lg border-gray-600 border-opacity-30"
            />
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 gap-12">
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
