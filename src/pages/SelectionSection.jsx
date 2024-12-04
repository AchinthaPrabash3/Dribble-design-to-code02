import { motion } from "framer-motion";

const image =
  "https://images.pexels.com/photos/21642977/pexels-photo-21642977/free-photo-of-portrait-of-family.jpeg";
const image2 =
  "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const GridSection01 = () => {
  return (
    <div className=" rounded-lg  flex flex-col justify-center px-20">
      <p className="mb-2 capitalize">customer review</p>
      <div className="flex items-center gap-4">
        <img
          className=" size-20 rounded-full object-cover"
          src="https://images.pexels.com/photos/20045343/pexels-photo-20045343/free-photo-of-portrait-of-woman-with-long-hair.jpeg"
          alt="face of a user"
        />
        <div>
          <h2 className="text-2xl capitalize font-bold">mohammad ali</h2>
          <p className=" capitalize font-thin text-slate-400">
            product designer, ofspace
          </p>
        </div>
      </div>
      <p className="w-[300px] text-sm leading-tight mt-5 font-thin">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        labore provident eaque aperiam esse nisi officiis ipsam facilis enim
        eum.
      </p>
      <ul className=" space-y-2 mt-6 pl-5 *:capitalize *:text-lg">
        <motion.li
          whileHover={{ scale: 1.05 }}
          className="before:top-1/2 cursor-pointer before:-translate-y-1/2 before:-left-6 leading-none before:size-3 before:rounded-full before:bg-orange-500 relative before:absolute"
        >
          personalized solutions
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          className="before:top-1/2 cursor-pointer before:-translate-y-1/2 before:-left-6 leading-none before:size-3 before:rounded-full before:bg-orange-500 relative before:absolute"
        >
          trusted reputation
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          className="before:top-1/2 cursor-pointer before:-translate-y-1/2 before:-left-6 leading-none before:size-3 before:rounded-full before:bg-orange-500 relative before:absolute"
        >
          comprehensive covarage
        </motion.li>
      </ul>
    </div>
  );
};

const GridSection02 = () => {
  return (
    <motion.div
      whileHover={{ rotate: 2 }}
      className="w-[550px]  bg-cover rounded-lg overflow-hidden text-white"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="pt-3 pl-3 bg-slate-800/30 h-full">
        <h3 className=" uppercase font-bold leading-none tracking-widest text-xl">
          edeals
        </h3>
        <p className="first-letter:uppercase">get the peace of mind</p>
      </div>
    </motion.div>
  );
};

const GridSection03 = () => {
  return (
    <div className=" rounded-lg w-[450px] px-4 flex flex-col">
      <div
        className="h-[250px] bg-cover rounded-2xl grid place-items-center flex-none"
        style={{
          backgroundImage: `url('${image2}')`,
        }}
      >
        <motion.div
          className="bg-orange-500 p-4 w-fit rounded-full grid place-items-center border-white border"
          whileHover={{ rotate: 180, scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-white fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </motion.div>
      </div>
      <div className="grow pb-4 pl-4 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-2xl capitalize font-bold my-3">
            video higilight
          </h2>
          <p className="text-sm first-letter:uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos autem doloribus? Nulla voluptates obcaecati corrupti
            amet eligendi hic laboriosam voluptatum itaque iure reiciendis.
            Dolorum natus explicabo ea ipsam harum!
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 0.95 }}
          className=" capitalize px-5 py-2 rounded-full border border-green-500 shadow-lg"
        >
          view all documentation
        </motion.button>
      </div>
    </div>
  );
};

const Select = () => {
  return (
    <section className="mt-20 pl-12">
      <div className="text-7xl first-letter:uppercase  font-medium mb-4 -space-y-2">
        <p>choose us for</p>
        <p>your protection</p>
      </div>
      <div className="grid lg:grid-flow-col grid-flow-row auto-cols-max  h-[500px] gap-3 w-fit mr-auto">
        <GridSection01 />
        <GridSection02 />
        <GridSection03 />
      </div>
    </section>
  );
};

export default Select;
