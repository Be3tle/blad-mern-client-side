import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="mb-20">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/people-holding-rubber-heart_1150-18576.jpg?w=900&t=st=1700922311~exp=1700922911~hmac=be2adbe84e42bc72be773a70ff9a0b84da49001382dbd45a2a7a356434e31177)',
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="md:mr-72 text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-2xl p-7 uppercase font-medium md:p-0 md:mb-5 md:text-5xl md:font-semibold md:leading-snug">
              Donate blood, <br /> save lives
            </h1>

            <div className="flex flex-col w-40">
              <Link to="/register">
                <button className="btn px-2 bg-red-600 text-white hover:bg-red-700 border-0 font-normal m-7 mb-0 md:m-0 text-sm md:mt-3">
                  Join as a donor
                </button>
              </Link>
              <Link to="/search-donors">
                <button className="btn bg-red-600 text-white hover:bg-red-700 border-0 font-normal m-7 md:m-0 text-sm md:mt-3">
                  Search for a donor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
