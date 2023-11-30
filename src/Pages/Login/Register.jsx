import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [regError, setRegError] = useState('');

  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
          title: 'Congrats!',
          text: 'Successfully registered',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div className="text-center flex justify-center items-center">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-7">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mt-20 mb-10">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  required
                  {...register('name')}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>{' '}
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Photo URL
                </label>
                <input
                  type="text"
                  required
                  {...register('photoURL')}
                  placeholder="Photo URL"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>{' '}
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  required
                  {...register('email')}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Blood Group
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  {...register('bloodGroup', { required: true })}
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  District
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  {...register('district', { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Jhalokathi">Jhalokathi</option>
                  <option value="Nalchity">Pirozpur</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Barguna">Barguna</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Upazila
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  {...register('upazila', { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Barisal Sadar">Barisal Sadar</option>
                  <option value="Swarupkathi">Swarupkathi</option>
                  <option value="Nalchity">Nalchity</option>
                  <option value="Bauphal">Bauphal</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Charfesson">Charfesson</option>
                  <option value="Tajumuddin">Tajumuddin</option>
                  <option value="Uzirpur">Uzirpur</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />

                {errors.password?.type === 'required' && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>
              {regError && <p className="text-red-600">{regError}</p>}
              <input
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-red-600"
                type="submit"
                value="Register"
              />
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">
              Already have an account?
              <a
                rel="noopener noreferrer"
                href="/login"
                className="underline text-gray-100"
              >
                Log in
              </a>
            </p>
          </div>

          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/give-blood-background_1057-1029.jpg?w=740&t=st=1701170932~exp=1701171532~hmac=1de3bacd9d01d64d572c7d9f74d2f66ce977262f38c8d5a6d635bb15f4d4d36c"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
