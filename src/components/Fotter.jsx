/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-key */
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const FotterCardLeft = () => {
  let icons = [
    <FaFacebookF />,
    <FaTwitter className="fill-blue-500" />,
    <FaInstagram />,
    <FaLinkedinIn />,
  ];
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="size-16 rounded-full shadow-md" />
        <h5 className="text-3xl first-letter:uppercase font-medium">edeals</h5>
      </div>
      <p className="max-w-sm text-sm font-thin ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cum
        magni soluta! Labore,
      </p>
      <ul className="flex items-center space-x-2">
        {icons.map((icon) => (
          <li className="*:size-4 p-3 rounded-full border-[1px] border-black/40">
            {icon}
          </li>
        ))}
      </ul>
    </>
  );
};

const FooterColumns = ({ items, title }) => {
  return (
    <div>
      <h6 className="text-3xl first-letter:uppercase">{title}</h6>
      <ul className="mt-2 space-y-0.5">
        {items.map((item) => (
          <li className="capitalize text-slate-400">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="relative w-fit mx-auto">
        <h4 className="text-[250px] uppercase font-bold text-center leading-none">{`let's talk`}</h4>
        <button className="size-28 grid place-content-center bg-orange-500 absolute -top-6 right-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-12 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between px-24 mt-8">
        <div className="space-y-2">
          <FotterCardLeft />
        </div>
        <div className="flex space-x-12">
          <FooterColumns
            items={["home", "about us", "our services", "insurance product"]}
            title="company"
          />
          <FooterColumns
            items={["home", "about us", "our services", "insurance product"]}
            title="menu"
          />
          <FooterColumns
            items={["home", "about us", "our services", "insurance product"]}
            title="legal"
          />
          <FooterColumns
            items={["home", "about us", "our services", "insurance product"]}
            title="address"
          />
        </div>
      </div>
      <div className="border-t-2 mt-5 py-3">
        <ul className="flex items-center justify-end space-x-5 font-bold capitalize text-slate-400">
          <li>privacy policy</li>
          <li>terms and conditions</li>
          <li> about us</li>
          <li> FAQ</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
