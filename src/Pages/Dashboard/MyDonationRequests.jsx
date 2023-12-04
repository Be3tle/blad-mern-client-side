import useRequest from '../../Hooks/useRequest';

const MyDonationRequests = () => {
  const [request] = useRequest();

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-400">
      <h2 className="mb-4 text-2xl font-semibold leading">Donation Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-gray-700 ">
            <tr className="text-left">
              <th className="p-3">Recipient Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Date</th>
              <th className="p-3">Donor Name</th>
              <th className="p-3 text-right">Donor Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {request.map((item) => (
              <tr
                key={item._id}
                className="border-b border-opacity-20 border-gray-700 bg-gray-900"
              >
                <td className="p-3">
                  <p>{item.recName}</p>
                </td>
                <td className="p-3">
                  <p>
                    {item.recUpazila}, {item.recDistrict}
                  </p>
                </td>
                <td className="p-3">
                  <p>{item.time}</p>
                  <p className="text-gray-400">{item.date}</p>
                </td>
                <td className="p-3">
                  <p>{item.donorName}</p>
                </td>
                <td className="p-3 text-right">
                  <p>{item.donorEmail}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-900">
                    <span>{item.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonationRequests;
