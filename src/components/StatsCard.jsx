import { motion } from "framer-motion";

const StatsCard = () => {
  const userImages = [
    "https://images.pexels.com/photos/19348324/pexels-photo-19348324/free-photo-of-portrait-of-a-woman-with-flowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17071640/pexels-photo-17071640/free-photo-of-man-in-sunglasses-and-turtleneck.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/16963436/pexels-photo-16963436/free-photo-of-smiling-teenager-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];
  return (
    <div className="h-[200px] shadow-lg shadow-black/20 w-[300px] rounded-3xl bg-white absolute bottom-3 right-3 overflow-hidden flex items-center">
      <img
        src="https://images.pexels.com/photos/5325571/pexels-photo-5325571.jpeg?auto=compress&cs=tinysrgb&w=800"
        className="w-1/2 h-full"
        alt=""
      />
      <div className="text-black w-1/2 grid place-items-center ">
        <h2 className="text-4xl font-bold">120K+</h2>
        <div className="flex -space-x-7 mt-3">
          {userImages.map((url, i) => (
            <img src={url} alt="" className="size-12 rounded-full" key={i} />
          ))}
          <motion.div
            className="size-12 bg-white grid place-items-center shadow-[0_0_10px_3px] shadow-black/20 rounded-full"
            whileHover={{ rotate: 180 }}
          >
            <motion.svg
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </motion.svg>
          </motion.div>
        </div>{" "}
        <p className="capitalize text-sm mt-3">happy customers</p>
      </div>
    </div>
  );
};
export default StatsCard;
