import Swal from 'sweetalert2';

const DonorsCard = ({ donor, donors }) => {
  const { _id, name, photoURL } = donor;

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <div className="">
        <div className="flex justify-between my-2 items-center">
          <img src={photoURL} className="w-20 rounded-full" alt="gadget" />
          <h2 className="text-lg font-semibold ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default DonorsCard;
