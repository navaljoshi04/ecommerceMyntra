import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 pl-10 mt-15">
        <div>
          <div>
            <h6 className="font-bold text-[12px] ">ONLINE SHOPPING</h6>
            <div className="flex mt-2 flex-col font-extralight text-[14px] px-2 py-2 text-gray-400">
              <Link> Men</Link>
              <Link> Women</Link>
              <Link> Kids </Link>
              <Link> Home </Link>
              <Link> Beauty </Link>
              <Link> Genz</Link>
              <Link> Gift </Link>
              <Link> Cards </Link>
              <Link> Myntra</Link>
              <Link> Insider</Link>
            </div>
            <h6 className="font-bold text-[12px] ">USEFUL LINKS</h6>
            <div className="flex mt-2 flex-col font-extralight text-gray-400 text-[14px] px-2 py-2">
              <Link> Blog</Link>
              <Link> Careers</Link>
              <Link> Site Map</Link>
              <Link> Corporate Information </Link>
              <Link> Whitehat </Link>
              <Link> Cleartip</Link>
              <Link> Myntra Global</Link>
            </div>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-[12px] ">CUSTOMER POLICIES</h6>
          <div className="flex mt-2 flex-col font-extralight text-[14px] px-2 py-2 text-gray-400">
            <Link> Contact Us</Link>
            <Link> FAQ</Link>
            <Link> T&C</Link>
            <Link> Terms Of Use </Link>
            <Link> Track Orders </Link>
            <Link> Shipping</Link>
            <Link> Cancellation </Link>
            <Link> Returns </Link>
            <Link> Privacy policy </Link>
            <Link> Grievance Redressal</Link>
          </div>
        </div>

        <div className="bg-white p-2">
          <h6 className="font-bold text-[12px] ">
            EXPERIENCE MYNTRA ON MOBILE
          </h6>
          <div className="flex">
            <img
              src="https://imgs.search.brave.com/9YVyZMlLP1Z6DHJh6v2-4dVQvoCf4gnHAYpdiF15PgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTIv/ODcxLzM2NS9zbWFs/bC9nb29nbGUtcGxh/eS1zdG9yZS1kb3du/bG9hZC1idXR0b24t/aW4tYmxhY2stY29s/b3JzLWRvd25sb2Fk/LW9uLXRoZS1nb29n/bGUtcGxheS1zdG9y/ZS1mcmVlLXBuZy5w/bmc"
              alt=""
              className="h-15 mt-8"
            />
            <img
              src="https://imgs.search.brave.com/hPgXtT82jomhjtiFG79yVRjkdXRGBSyajZueoyxaKXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcC1zdG9yZS1s/b2dvLXBuZy9kb3du/bG9hZC1vbi10aGUt/YXBwLXN0b3JlLWxv/Z28tcG5nLTIzLnBu/Zw"
              alt=""
              className="h-25 mt-2 rounded-md"
            />
          </div>
          <h6 className="font-bold text-[12px] ">KEEP IN TOUCH</h6>
          <div className="flex mt-4 gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png"
              alt="facebook"
              className="h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"
              alt="whatsapp"
              className="h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png"
              alt="youtube"
              className="h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
              alt="instagram"
              className="h-10"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 ml-12">
            {/* First row: Original guarantee */}
            <div className="flex items-start gap-2">
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt=""
                className="h-8 object-contain"
              />
              <div className="text-[12px] font-mono text-gray-400 leading-tight">
                <span className="font-bold text-black">100% ORIGINAL</span>{" "}
                <br />
                guarantee for all products at myntra.com
              </div>
            </div>

            {/* Second row: Return policy */}
            <div className="flex items-start gap-2">
              <img
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                alt=""
                className="h-8 object-contain"
              />
              <div className="text-[12px] font-mono text-gray-400 leading-tight">
                <span className="font-bold text-black">
                  Return within 14 days
                </span>{" "}
                <br />
                of receiving the order
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
