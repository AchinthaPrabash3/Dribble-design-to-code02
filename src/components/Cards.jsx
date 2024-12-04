/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Card = ({ image, title, description }) => {
  return (
    <motion.div className="w-[350px]  group " whileHover={{ scale: 0.97 }}>
      <div
        className="relative h-[400px] w-full rounded-xl bg-cover flex justify-center bg-center group-hover:shadow-xl transition-all duration-300"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <motion.div
          className="absolute flex justify-center items-center bg-slate-200/60 border px-1 py-1 pl-4 space-x-3 top-3 rounded-full backdrop-blur shadow-lg cursor-pointer"
          whileHover={{ scale: 0.9 }}
        >
          <p className="flex-none text-sm uppercase font-bold leading-none">
            auto insurance
          </p>
          <div className="size-5 flex-none rounded-full grid place-items-center bg-amber-500 *:stroke-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="w-full mt-2.5">
        <div className="p-1 bg-amber-500 rounded-full *:stroke-white w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <h2 className="capitalize font-bold text-xl mb-1">{title}</h2>
        <p className="leading-none text-wrap w-full text-sm pr-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const data = [
  {
    title: "homeowners",
    image: "https://images.pexels.com/photos/2505132/pexels-photo-2505132.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum
          achintha.`,
  },
  {
    title: "renters",
    image:
      "https://images.pexels.com/photos/28354747/pexels-photo-28354747/free-photo-of-a-family-is-posing-for-a-photo-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum
          achintha.`,
  },
  {
    title: "identity protection",
    image: "https://images.pexels.com/photos/1914984/pexels-photo-1914984.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum
          achintha.`,
  },
  {
    title: "auto insurance",
    image: "https://images.pexels.com/photos/1170897/pexels-photo-1170897.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum
          achintha.`,
  },
];

const Cards = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-2 mt-10 w-fit gap-5 mx-auto">
      {data.map((catdData, i) => (
        <Card key={i} {...catdData} />
      ))}
    </div>
  );
};

export default Cards;
