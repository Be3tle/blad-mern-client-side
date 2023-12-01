const Featured = () => {
  return (
    <div>
      <section className="p-6">
        <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
            <span className="block mb-2 text-sm s text-red-500">
              HELP THE PEOPLE IN NEED
            </span>
            <h1 className="text-2xl md:text-5xl font-extrabold ">
              Welcome to <span className="text-red-600">BLAD</span>
            </h1>
            <p className="my-8">
              <span className="font-medium ">A blood donor organization. </span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>

            <button className="btn px-2 bg-red-600 text-white hover:bg-red-700 border-0 font-normal m-7 md:m-0 text-sm md:mt-3">
              Explore Now
            </button>
          </div>
          <img
            src="https://img.freepik.com/free-photo/doctor-making-blood-test_23-2147612267.jpg?w=900&t=st=1700924464~exp=1700925064~hmac=0ff2b89e565c71434170803050561ae6a70f595f693eb574fcf2a4544c811f8e"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Featured;
