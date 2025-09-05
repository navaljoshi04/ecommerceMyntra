import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomeComponent = () => {
  const images = [
    {
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
      category: "luggage-backpacks",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
      category: "men/shoes",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg",
      category: "brands/lancer",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
      category: "brands/cr7",
    },
    {
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
      category: "brands/uspa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center p-4 mt-20">
          <Link to={`/products/${images[currentIndex].category}`}>
            <img
              src={images[currentIndex].image}
              alt="slider"
              className="w-full rounded-sm transition-all duration-500"
            />
          </Link>
          <div className="flex gap-3 mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex == index ? "bg-blue-400" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <h1 className="font-mono font-light text-3xl ml-20">
          BIGGEST DEALS ON TOP BRANDS{" "}
        </h1>
        <div className="grid grid-cols-4 mt-10">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg"
              alt=""
              className="h-80 w-80 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg"
              alt=""
              className="h-80 w-80 object-contain"
            />
          </div>
        </div>

        <h1 className="font-mono font-light text-3xl ml-20 mt-10">
          CATEGORIES TO BAGS
        </h1>

        <div className="grid grid-cols-6 mt-10 mx-10">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
              alt=""
              className="w-70
            h-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
              alt=""
              className="w-70
            h-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
              alt=""
              className="w-70
            h-70 object-contain px-2"
            />
          </div>
        </div>

        <h1 className="font-mono font-light text-3xl ml-20 mt-10">
          EXPLORE TOP BRANDS
        </h1>

        <div className="grid grid-cols-5 mt-10 mx-10">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
        </div>

        <h1 className="font-mono font-light text-3xl ml-20 mt-10">
          TRENDING IN FOOTWEAR
        </h1>

        <div className="grid grid-cols-5 mt-10 mx-10">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
        </div>

        <h1 className="font-mono font-light text-3xl ml-20 mt-10">
          TRENDING IN ACCESSORIES
        </h1>
        <div className="grid grid-cols-5 mt-10 mx-10">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>

          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
              alt=""
              className="h-70 w-70 object-contain px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
