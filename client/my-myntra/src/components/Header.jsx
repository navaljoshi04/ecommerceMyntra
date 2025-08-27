import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const menMenu = [
    { name: "Topwear", link: "/men/topwear", isHeading: true },
    { name: "Tshirt", link: "/men/tshirt" },
    { name: "Casual Shirts", link: "/men/casual-shirts" },
    { name: "Formal Shirts", link: "/men/formal-shirts" },
    { name: "Sweatshirts", link: "/men/sweatshirts" },
    { name: "Sweater", link: "/men/sweater" },
    { name: "Jackets", link: "/men/jackets" },
    { name: "Blazers & Coats", link: "/men/blazers-coats" },
    { name: "Suits", link: "/men/suits" },
    { name: "Rain Jackets", link: "/men/rain-jackets" },
    {
      name: "Indian & Festive wear",
      link: "/men/indian-festive",
      isHeading: true,
    },
    { name: "Kurta & Kurta Sets", link: "/men/kurta-sets" },
    { name: "Sherwanis", link: "/men/sherwanis" },
    { name: "Dhotis", link: "/men/dhotis" },
    { name: "Bottomwear", link: "/men/bottomwear", isHeading: true },
    { name: "Jeans", link: "/men/jeans" },
    { name: "Casual Trouser", link: "/men/casual " },
    { name: "Formal Trouser", link: "/men/formals" },
    { name: "Shorts", link: "/men/short" },
    { name: "Track Pants & Joggers", link: "/men/track" },
    {
      name: "Innearwear & Sleepwear",
      link: "/men/innearwear",
      isHeading: true,
    },
    { name: "Brief & Trunks", link: "/men/brief" },
    { name: "Boxers", link: "/men/boxers" },
    { name: "Vest", link: "/men/vest" },
    { name: "Sleepwear & Loungewear", link: "/men/sleepwear" },
    { name: "Thermals", link: "/men/thermal" },
    { name: "Plus Size", link: "/men/plus" },
    { name: "Footwear", link: "/men/footwear", isHeading: true },
    { name: "Casual Shoes", link: "/men/casualshoes" },
    { name: "Formal Shoes", link: "/men/formal" },
    { name: "Sneakers", link: "/men/sneaker" },
    { name: "Flip flops", link: "/men/flip-flop" },
    { name: "Socks", link: "/men/socks" },
    {
      name: "Personal Care & Grooming",
      link: "/men/personal-care",
      isHeading: true,
    },
    { name: "Sunglasses & frames", link: "/men/sunglasses", isHeading: true },
    { name: "Watches", link: "/men/watches" },
    { name: "Fashion Accessories", link: "/men/fashion", isHeading: true },
    { name: "Belts", link: "/men/belts" },
    { name: "Perfumes & Body Mists", link: "/men/perfumes" },
    { name: "Trimmers", link: "/men/trimmers" },
    { name: "Deodorants", link: "/men/deodorants" },
    { name: "Ties & Pocket Squares", link: "/men/ties" },
    { name: "Caps & Hats", link: "/men/caps" },
  ];

  const womenMenu = [
    {
      name: "Indian & Fusion Wear",
      link: "women/indian-fusion-wear",
      isHeading: true,
    },
    { name: "Kurtas & Suits", link: "women/kurtas-and-suits" },
    { name: "Kurtis, Tunics & Tops", link: "women/kurtis-tunics-and-tops" },
    { name: "Sarees", link: "women/sarees" },
    { name: "Ethnic Wear", link: "women/ethnic-wear" },
    {
      name: "Leeggings, Salwars & Churidars",
      link: "women/leggings-salwars-and-churidars",
    },
    { name: "Skirts & Palazzos", link: "women/skirts-and-palazzos" },
    { name: "Dress Materials", link: "women/dress-materials" },
    { name: "Lehenga Cholis", link: "women/lehenga-cholis" },
    { name: "Dupattas & Shawls", link: "women/dupattas-and-shawls" },
    { name: "Jackets", link: "women/jackets" },

    {
      name: "Belts, Scarves & More",
      link: "women/belts-scarves-and-more",
      isHeading: true,
    },
    {
      name: "Watches & Wearables",
      link: "women/watches-and-wearables",
      isHeading: true,
    },
    { name: "Plus Size", link: "women/plus-size", isHeading: true },

    { name: "Western Wear", link: "women/western-wear", isHeading: true },
    { name: "Dresses", link: "women/dresses" },
    { name: "Tops", link: "women/tops" },
    { name: "Tshirts", link: "women/tshirts" },
    { name: "Jeans", link: "women/jeans" },
    { name: "Trousers & Capris", link: "women/trousers-and-capris" },
    { name: "Shorts & Skirts", link: "women/shorts-and-skirts" },
    { name: "Co-ords", link: "women/co-ords" },
    { name: "Playsuits", link: "women/playsuits" },
    { name: "Jumpsuits", link: "women/jumpsuits" },
    { name: "Shrugs", link: "women/shrugs" },
    { name: "Sweaters & Sweatshirts", link: "women/sweaters-and-sweatshirts" },
    { name: "Jackets & Coats", link: "women/jackets-and-coats" },
    { name: "Blazers & Waistcoats", link: "women/blazers-and-waistcoats" },

    { name: "Maternity", link: "women/maternity", isHeading: true },
    {
      name: "Sunglasses & Frames",
      link: "women/sunglasses-and-frames",
      isHeading: true,
    },

    { name: "Footwear", link: "women/footwear", isHeading: true },
    { name: "Flats", link: "women/flats" },
    { name: "Casual Shoes", link: "women/casual-shoes" },
    { name: "Heels", link: "women/heels" },
    { name: "Boots", link: "women/boots" },
    {
      name: "Sports Shoes & Floaters",
      link: "women/sports-shoes-and-floaters",
    },

    {
      name: "Sports & Active Wear",
      link: "women/sports-and-active-wear",
      isHeading: true,
    },
    { name: "Clothing", link: "women/clothing" },
    { name: "Footwear", link: "women/footwear" },
    { name: "Sports Accessories", link: "women/sports-accessories" },
    { name: "Sports Equipment", link: "women/sports-equipment" },

    {
      name: "Beauty & Personal Care",
      link: "women/beauty-and-personal-care",
      isHeading: true,
    },
    { name: "Makeup", link: "women/makeup" },
    { name: "Skincare", link: "women/skincare" },
    { name: "Premium Beauty", link: "women/premium-beauty" },
    { name: "Lipsticks", link: "women/lipsticks" },
    { name: "Fragrances", link: "women/fragrances" },

    {
      name: "Lingerie & Sleepwear",
      link: "women/lingerie-and-sleepwear",
      isHeading: true,
    },
    { name: "Bras", link: "women/bras" },
    { name: "Briefs", link: "women/briefs" },
    { name: "Shapewear", link: "women/shapewear" },
    { name: "Sleepwear & Loungewear", link: "women/sleepwear-and-loungewear" },
    { name: "Swimwear", link: "women/swimwear" },
    { name: "Camisoles & Thermals", link: "women/camisoles-and-thermals" },

    { name: "Gadgets", link: "women/gadgets", isHeading: true },
    { name: "Smart Wearables", link: "women/smart-wearables" },
    { name: "Fitness Gadgets", link: "women/fitness-gadgets" },
    { name: "Headphones", link: "women/headphones" },
    { name: "Speakers", link: "women/speakers" },

    { name: "Jewellery", link: "women/jewellery", isHeading: true },
    { name: "Fashion Jewellery", link: "women/fashion-jewellery" },
    { name: "Fine Jewellery", link: "women/fine-jewellery" },
    { name: "Earrings", link: "women/earrings" },

    { name: "Backpacks", link: "women/backpacks", isHeading: true },
    {
      name: "Handbags, Bags & Wallets",
      link: "women/handbags-bags-and-wallets",
      isHeading: true,
    },
    {
      name: "Luggages & Trolleys",
      link: "women/luggages-and-trolleys",
      isHeading: true,
    },
  ];

  // helper function
  function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  return (
    <header className="w-full shadow-md px-6 py-3 bg-white fixed">
      <div className="grid grid-cols-12 items-center ">
        {/* Left Section (Logo + Nav Links) - takes ~50% */}
        <div className="col-span-6 flex items-center gap-6">
          <img
            src="https://imgs.search.brave.com/EqQ-3LkxDgc5ckN6ThWTyfcjnz5r0t2-yHy3RiJXrMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/MS8wMS9teW50cmEu/cG5nP3c9NjQw"
            alt="myntra logo"
            className="h-10 w-auto object-contain"
          />
          <nav className="flex gap-4 text-sm font-semibold">
            <div className="relative group">
              {/* Link trigger */}
              <Link to="/men" className="relative px-2 py-1">
                MEN
                {/* underline */}
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Dropdown */}
              <div className="invisible opacity-0 absolute mt-10 top-full left-0 w-[700px] grid grid-cols-4 gap-6 bg-white p-6 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {chunkArray(menMenu, Math.ceil(menMenu.length / 4)).map(
                  (col, colIndex) => (
                    <div key={colIndex} className="flex flex-col">
                      {col.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className={`py-1 ${
                            item.isHeading
                              ? "text-[#ee5f73] font-semibold"
                              : "text-gray-700 font-normal hover:text-black hover:font-semibold"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative group">
              <Link to="/women" className="relative px-2 py-1">
                WOMEN
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-pink-400 transition-all duration-300 group-hover:w-full">
                  {" "}
                </span>
              </Link>
              <div className="invisible opacity-0 absolute mt-10 top-full left-0 w-[700px] grid grid-cols-4 gap-6 bg-white p-6 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {chunkArray(womenMenu, Math.ceil(womenMenu.length / 4)).map(
                  (col, colIndex) => (
                    <div key={colIndex} className="flex flex-col">
                      {col.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className={`py-1 ${
                            item.isHeading
                              ? "text-pink-600 font-semibold"
                              : "text-gray-700 font-normal hover:text-black hover:font-semibold"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative group">
              <Link to="/kids" className="relative px-2 py-1">
                KIDS
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-pink-400 transition-all duration-300 group-hover:w-full">
                  {" "}
                </span>
              </Link>
              <div className="absolute hidden mt-10 top-full group-hover:block">
                hhkk
              </div>
            </div>

            <div className="relative group">
              <Link to="/home" className="relative px-2 py-1">
                HOME
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full">
                  {" "}
                </span>
              </Link>
              <div className="absolute hidden mt-10 top-full group-hover:block">
                hhkk
              </div>
            </div>

            <div className="relative group">
              <Link to="/home" className="relative px-2 py-1">
                BEAUTY
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-[#0db7af] transition-all duration-300 group-hover:w-full">
                  {" "}
                </span>
              </Link>
              <div className="absolute hidden mt-10 top-full group-hover:block">
                hhkk
              </div>
            </div>

            <div className="relative group">
              <Link to="/genz" className="relative px-2 py-1">
                GENZ
                <span className="absolute left-0 -bottom-5 h-0.5 w-0 bg-[#0db7af] transition-all duration-300 group-hover:w-full">
                  {" "}
                </span>
              </Link>
              <div className="absolute hidden mt-10 top-full group-hover:block">
                hhkk
              </div>
            </div>
          </nav>
        </div>

        {/* Middle Section (Search Bar) - takes ~30% */}
        <div className="col-span-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full rounded-md px-4 py-2 text-sm border"
            />
          </div>
        </div>

        {/* Right Section (Icons) - takes ~20% */}
        <div className="col-span-2 flex justify-end gap-6 text-gray-700">
          <Link
            to="/profile"
            className="flex flex-col items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span className="text-xs">Profile</span>
          </Link>
          <Link
            to="/wishlist"
            className="flex flex-col items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faHeart} />
            <span className="text-xs">Wishlist</span>
          </Link>
          <Link to="/bag" className="flex flex-col items-center cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} />
            <span className="text-xs">Bag</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
