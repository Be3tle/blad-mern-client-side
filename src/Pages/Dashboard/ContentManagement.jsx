import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const ContentManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      const blogItem = {
        title: data.title,
        photoURL: data.photoURL,
        details: data.details,
      };
      axiosSecure.post('/blogs', blogItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Blog created successfully',
            showConfirmButton: false,
            timer: 2500,
          });
          // refetch req to update the req items count
          reset();
        }
      });
    }
  };
  return (
    <div>
      <div>
        <section className="py-6 bg-zinc-100">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x py-10">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-xl font-bold">Create a Blog</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder=""
                  {...register('title')}
                  className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-800 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register('photoURL')}
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Details
                </label>
                <textarea
                  name="details"
                  {...register('details')}
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ri focus:ri"
                ></textarea>
              </div>

              <input
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-red-600"
                type="submit"
                value="Create"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentManagement;
