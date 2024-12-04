import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa6";

const Card01 = () => {
  return (
    <div className="w-[450px] bg-gradient-to-br from-orange-600 to-orange-400 self-end p-6  rounded-3xl shadow-xl flex-none">
      <img
        src="https://images.pexels.com/photos/27603433/pexels-photo-27603433/free-photo-of-blonde-beauty-s-eye-catching-glasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="customer face"
        className=" w-[150px] h-[150px] object-center rounded-2xl object-cover"
      />
      <div className="mt-4">
        <h3 className=" leading-none text-3xl capitalize font-medium text-white">
          rabin ahammad
        </h3>
        <p className="text-xl capitalize font-thin text-white">
          project manager
        </p>
      </div>
    </div>
  );
};

const Card02 = () => {
  return (
    <div className=" self-end flex items-center bg-slate-100 p-5 rounded-2xl gap-5 flex-none">
      <div className="flex-none">
        <h2 className=" text-2xl capitalize font-medium leading-none">
          maliha mili
        </h2>
        <p className=" capitalize font-thin">productr designer</p>
        <img
          src="https://images.pexels.com/photos/28369257/pexels-photo-28369257/free-photo-of-a-woman-in-a-black-top-sitting-on-a-couch.jpeg"
          alt="face"
          className="h-[320px] w-[250px] object-cover object-top rounded-lg"
        />
      </div>
      <p className="w-[350px] text-balance text-xl font-light">
        <FaQuoteRight className="size-14 fill-slate-800" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure
        molestias laboriosam magnam, officiis voluptates nam id doloribus
        quisquam dignissimos pariatur non eaque labore reiciendis consequuntur,
        eveniet, ullam quos. Natus!
      </p>
    </div>
  );
};

const handleClick = (e, i) => {
  const btns = document.querySelectorAll(".btn");
  if (i == 1) {
    btns[0].classList.add("bg-orange-500");
    btns[1].classList.remove("bg-orange-500");
    btns[0].classList.add("text-white");
    btns[1].classList.remove("text-white");
  } else {
    btns[0].classList.remove("bg-orange-500");
    btns[1].classList.add("bg-orange-500");
    btns[1].classList.add("text-white");
    btns[0].classList.remove("text-white");
  }
};

const scrollLeft = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.scrollLeft -= "200";
};
const scrollRight = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.scrollLeft += "200";
};

const About = () => {
  return (
    <section className="mt-24 p-4 bg-slate-100">
      <div className="flex justify-between items-center">
        <h2 className=" capitalize font-bold text-7xl">
          clients about <br />
          our work
        </h2>
        <div className="[&_button]:p-3 [&_button]:rounded-full flex space-x-2 ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn shadow-lg transition-all duration-200 bg-orange-500 text-white"
            onClick={(e) => {
              handleClick(e, 1);
              scrollLeft();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn shadow-lg transition-all duration-200"
            onClick={(e) => {
              handleClick(e, 2);
              scrollRight();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <div
        className="flex gap-4 h-[500px] w-full overflow-hidden scroll-smooth"
        id="card-container"
      >
        <Card01 />
        <Card02 />
        <Card01 />
        <Card02 />
      </div>
    </section>
  );
};
export default About;
