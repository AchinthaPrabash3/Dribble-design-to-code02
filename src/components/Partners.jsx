const PartnerCard = () => {
  let companyLogos = [
    "https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cargomatic_%28Company%29_Logo.png",
    "https://logodownload.org/wp-content/uploads/2022/10/heineken-company-logo.png",
    "https://seeklogo.com/images/B/blue-business-company-logo-01C6FD8C19-seeklogo.com.png",
    "https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-7.png",
    "https://png.pngitem.com/pimgs/s/12-121671_bee-friendly-logo-bee-black-logo-png-transparent.png",
    "https://cdn.cookielaw.org/logos/8153b982-ae11-46a0-b7c2-6e4e3b591d72/8a37f712-8eb0-4967-9ca7-343409702cfa/5228da75-715f-4d1a-9262-2662775eb1ce/Broadcom_Logo_Red-Black_no-tag.png",
    "https://cdn.cookielaw.org/logos/f2660c9a-abcb-4c03-b41f-49f0ccedd385/407ab338-5453-4fc1-9242-5b40766859b9/1da4e8d2-7371-44db-8b60-9e8065641f69/Benevity_Logo_Lg.png",
  ];
  let cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <div className="h-32 w-full grayscale hover:grayscale-0 cursor-pointer bg-slate-100 transition-all duration-200 hover:scale-105 shadow grid place-content-center">
        <img
          src={companyLogos[i]}
          alt="boring company logo"
          className="size-[200px] object-contain"
        />
      </div>
    );
  }
  return cards;
};

const Partners = () => {
  return (
    <div className="mt-20 pb-40">
      <div className="flex items-center justify-between">
        <h3 className="text-7xl first-letter:uppercase font-bold">
          over 20k companies in <br />{" "}
          <span className="text-orange-500">120+</span> industrees
        </h3>
        <p className="w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ullam fuga pariatur deleniti recusandae similique nam repudiandae
          maiores, totam ab necessitatibus natus placeat debitis est odio magni
          suscipit, praesentium aperiam.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto mt-12 px-8">
        <PartnerCard />
      </div>
    </div>
  );
};
export default Partners;
