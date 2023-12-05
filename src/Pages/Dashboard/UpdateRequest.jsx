import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useRequest from '../../Hooks/useRequest';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const UpdateRequest = () => {
  const item = useLoaderData();

  const {
    recName,
    recDistrict,
    recUpazila,
    hospital,
    address,
    date,
    time,
    _id,
    message,
  } = item;

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useRequest();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      const updatedItem = {
        recName: data.recName,
        recDistrict: data.recDistrict,
        recUpazila: data.recUpazila,
        hospital: data.hospital,
        address: data.address,
        date: data.date,
        time: data.time,
        message: data.message,
      };
      axiosSecure.patch(`/requests/${_id}`, updatedItem).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Request updated successfully',
            showConfirmButton: false,
            timer: 2500,
          });
          refetch();
        }
      });
    }
  };

  console.log(item);
  return (
    <div>
      <div>
        <section className="py-6 bg-zinc-100">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x py-10">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-xl font-bold">Update Donation</h1>
              <p className="pt-2 pb-4">
                Please change the necessary information
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Recipient Name
                </label>
                <input
                  type="text"
                  defaultValue={recName}
                  name="recName"
                  {...register('recName')}
                  placeholder="Recipient Name"
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-800 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Recipient District
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700text-gray-900 focus:border-violet-400"
                  name="recDistrict"
                  defaultValue={recDistrict}
                  {...register('recDistrict')}
                >
                  <option value="">Select</option>
                  <option value="barishal">Barishal</option>
                  <option value="jhalokathi">Jhalokathi</option>
                  <option value="nalchity">Pirozpur</option>
                  <option value="bhola">Bhola</option>
                  <option value="patuakhali">Patuakhali</option>
                  <option value="barguna">Barguna</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Recipient Upazila
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                  name="recUpazila"
                  defaultValue={recUpazila}
                  {...register('recUpazila')}
                >
                  <option value="">Select</option>
                  <option value="barishal">Barishal</option>
                  <option value="swarupkathi">Swarupkathi</option>
                  <option value="nalchity">Nalchity</option>
                  <option value="bauphal">Bauphal</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Charfesson">Charfesson</option>
                  <option value="Tajumuddin">Tajumuddin</option>
                  <option value="Uzirpur">Uzirpur</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Hospital Name
                </label>
                <input
                  type="text"
                  name="hospital"
                  defaultValue={hospital}
                  {...register('hospital')}
                  placeholder="Eg. Square Hospital"
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Full Address
                </label>
                <input
                  type="text"
                  defaultValue={address}
                  name="address"
                  {...register('address')}
                  placeholder="Eg. Oxford Mission Road, Barisal Sadar"
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Date
                </label>
                <input
                  type="date"
                  defaultValue={date}
                  name="date"
                  {...register('date')}
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  defaultValue={time}
                  {...register('time')}
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Message
                </label>
                <textarea
                  name="message"
                  defaultValue={message}
                  {...register('message')}
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ri focus:ri"
                ></textarea>
              </div>

              <input
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-red-600"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpdateRequest;
