const NavBar = () => {
  const navData = ["personal", "business", "employe"];

  return (
    <nav className="flex absolute justify-between items-center z-10 top-5 left-5 right-5  ">
      <div className="flex items-center space-x-5 p-1 border backdrop-blur-md border-white w-fit rounded-full bg-slate-400/20 overflow-hidden">
        <div className="flex items-center space-x-2">
          <div className="size-12 bg-white rounded-full" />
          <h1 className="capitalize text-2xl text-white font-bold">edeals</h1>
        </div>
        <ul className="flex space-x-1.5 capitalize">
          {navData.map((name, i) => (
            <li
              key={i}
              className="px-5 py-2 text-xl border border-white/30 rounded-full bg-white/20 text-white font-light transition-all duration-200 hover:scale-95 shadow-xl cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-2 ">
        <button className=" hover:scale-95 transition-all shadow-2xl shadow-black px-4 h-fit py-3 bg-white/50 backdrop-blur border border-white font-medium capitalize rounded-full">
          sign in
        </button>
        <button className=" hover:scale-95 transition-all shadow-2xl shadow-black px-4 h-fit py-3 bg-gradient-to-t from-orange-600 to-amber-600 capitalize text-white rounded-full border border-yellow-400">
          get a quote
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
