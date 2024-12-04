/* eslint-disable react/prop-types */
import StatsCard from "../components/StatsCard";

const Hero = ({ children }) => {
  return (
    <>
      <section className="z-0 relative h-[800px] rounded-[30px] bg-[url('https://images.pexels.com/photos/5638601/pexels-photo-5638601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover flex items-center">
        {children}
        <div className="pl-20 space-y-4">
          <div className="flex items-center space-x-3 bg-slate-300/50 px-1 pl-4 py-1 rounded-full w-fit">
            <p className="uppercase text-xl text-white">amazing features</p>
            <div className="bg-yellow-400 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-[120px] first-letter:uppercase font-bold text-white leading-none">
            get the peace
            <br />
            of mind.
          </h1>
          <button className="flex items-center justify-center space-x-2 px-10 py-4 bg-orange-500 shadow-inner shadow-black/40 rounded-full text-white">
            <p className="capitalize text-xl font-light">start creating</p>
            <div className="p-1 bg-yellow-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>
        <StatsCard />
      </section>
      <div className="mt-8 ml-8">
        <p className="text-6xl uppercase leading-none">
          <span className="bg-orange-500 text-white p-1 px-5 rounded-full ">
            discover
          </span>{" "}
          your own personal definition
        </p>
        <br />
        <div className="flex items-center gap-3 -mt-3">
          <p className="text-6xl uppercase leading-none">of your work</p>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Perferendis non modi, commodi est i
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
