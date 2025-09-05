import React from "react";

const productData = {
  "brands/cr7": {
    title: "CR7 Collection",
    description: "All products from Cristiano Ronaldo’s brand",
    items: ["CR7 Shoes", "CR7 T-Shirts", "CR7 Shorts"],
  },
  "brands/uspa": {
    title: "USPA Collection",
    description: "Exclusive USPA apparel",
    items: ["USPA Polo", "USPA Jeans"],
  },
  "luggage-backpacks": {
    title: "Luggage & Backpacks",
    description: "Travel in style with our range",
    items: [
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/12/MwAbc3wx_94c3330b71a3478a880f944b55793be0.jpg",
        price: "478",
        heading: "Dressberry",
        subheading: "Backpack",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/21/lZhW8XQK_f9879f9cc9234a23875cd274a79efeea.jpg",
        price: "890",
        heading: "Genie",
        subheading: "Women Graphic Backpack",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30035402/2024/7/25/650a51fc-ee59-4f87-ac01-ca1b9fd15f211721911848701-Skybags-Girls-Backpack-8381721911848135-1.jpg",
        price: "780",
        heading: "Favria",
        subheading: "Messenger Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/18/JgNq6Hf2_c2ee4b5c69134ef9b5788e8dda49f8c1.jpg",
        price: "1788",
        heading: "Daily Objects",
        subheading: "Structured Sling Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20350526/2022/10/11/cd2bf823-e112-4f80-9ffc-3ef1707e3f8b1665463858645PoliceBrownLeatherStructuredShoulderBagwithFringed7.jpg",
        price: "34567",
        heading: "Kara Bags",
        subheading: "Messenger Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/18/10SninGS_6f9e67b7c9c14acbaa88b00a786862f2.jpg",
        price: "1000",
        heading: "LOREM",
        subheading: "Texted Messenger Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22445168/2025/3/20/50d06446-5b42-4734-a2f5-242ca6e0fe831742480266228-DailyObjects-Kelp-Recycled-Cobble-Phone-Messenger-Bag-201742-1.jpg",
        price: "1080",
        heading: "Wildcraft",
        subheading: "Unisex Medium Backpack",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27356638/2025/3/25/f6a5b434-38d1-420b-86cf-f41588e232a21742880117289-SUPERVEK-Men-Classic-sling-bag-2021742880116523-1.jpg",
        price: "1450",
        heading: "Elmira",
        subheading: "Messenger bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/35304909/2025/7/4/67dde214-0285-4b55-bd70-8f6034ab33ce1751628873633-Genie-Women-Backpack-with-Hip-Strap-6741751628873229-1.jpg",
        price: "2340",
        heading: "SUPERVEK",
        subheading: "Travel Cross Body Sling Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29627010/2024/8/19/a6a31310-8933-4795-8e10-9573677318451724045127233-MIRAGGIO-PU-Structured-Backpack-8641724045126602-4.jpg",
        price: "6780",
        heading: "Caprese",
        subheading: "Cozy Backpack",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/28/9JM0j8ym_1f3ca44198e54710aaeb50ad6ab7a45b.jpg",
        price: "890",
        heading: "PROVOGUE",
        subheading: "Messenger Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25391986/2025/2/1/97808bb8-a8d0-4c63-bf9c-74c738140f291738413140206-Fastrack-Women-Pearl-White-College-Backpack-Bag-517384131395-1.jpg",
        price: "4000",
        heading: "HiELDEr",
        subheading: "Messenger Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20785662/2025/3/12/5009e2b2-a5b5-4d6b-93a8-76cfadf45d631741760944739-Fastrack-Women-Black-Solid-Backpack-871741760944232-1.jpg",
        price: "9080",
        heading: "Fasttrack",
        subheading: "Commercial Bag",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19332358/2024/4/13/04012e17-041b-49cb-b84e-6fd047b12d591712986540324-Veneer-Unisex-Tan-Solid-Laptop-Messenger-Bag-447171298653973-1.jpg",
        price: "2345",
        heading: "Rabitat",
        subheading: "Unisex Backpack",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/25/qmKfaMyI_30fc0d2108e5476d8641a843519426f9.jpg",
        price: "1222",
        heading: "KidoBags",
        subheading: "Kids Backpacks",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25272976/2023/10/13/50c90db1-b6a8-4a37-8904-ff923a36ba281697179876122-Genie-Women-Black--Pink-Backpack-4101697179875930-1.jpg",
        price: "1666",
        heading: "Funk For Hire",
        subheading: "Printed Backpacks",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29410160/2024/5/7/e0be635f-be29-49e4-9c8b-c2d946a2ad0c1715101139538Backpacks1.jpg",
        rupees: "2479",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29595148/2024/5/17/cb0223b9-ca13-45a2-91aa-65e65daff60d1715925201956Backpacks1.jpg",
        rupees: "2348",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/30/vuQaCZd2_75c24bfd00f441b59cfe451dde076369.jpg",
        rupees: "4500",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22445172/2025/3/20/2e9cef35-bd54-4f78-895b-ffdbbc198d0c1742480280056-DailyObjects-Amber-Recycled-Cobble-Phone-Sling-Bag-492174248-1.jpg",
        rupees: "2300",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/27/XnMbQsXH_d93dfb2c21cb4b9d9710ca587f96f5f0.jpg",
        rupees: "2100",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/30/GydQHEw9_962ec6daaa534782857b6cce69bc4722.jpg",
        rupees: "1900",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/34496967/2025/6/18/48eb782b-e69d-416c-a697-40c6e8f469851750232314499-MADBRAG-Vegan-Leather-Crossbody-Messenger-Bag-64617502323141-1.jpg",
        rupees: "3444",
        heading: "MadBrag",
        subheading: "Crossbody Messenger Bag",
      },
    ],
  },
  "men/shoes": {
    title: "lancer& Backpacks",
    description: "Travel in style with our range",
    items: [
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27107894/2024/10/7/29a5bfdc-9995-4434-92fc-98ae12170d081728299573318-Sparx-Men-Lace-Up-Mesh-Running-Shoes-4151728299572853-1.jpg",
        price: "1885",
        heading: "Sparx",
        subheading: "Sports shoes",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26264106/2023/12/6/6d0bd71a-4ac3-4d56-81e6-66258b985bb31701856176784Anouk1.jpg",
        price: "885",
        heading: "Anouk",
        subheading: "Mens Formal textured shoes",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/31974024/2024/12/14/9ae32db5-0579-4a9d-b580-417815e4b4661734192956181SportsShoes1.jpg",
        price: "2295",
        heading: "OFF LIMITS",
        subheading: "Mens tracking shoes",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/3/KogpjdoV_c91b24a0619f4a419ef2088cfb5dbbdc.jpg",
        price: "989",
        heading: "Roadster",
        subheading: "Mens Round comfort sandals",
      },
      {
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26967948/2024/1/18/774e411f-e5d9-4378-8bfe-e267aedcd6091705518383967ElPasoMenCream-ColouredBeigeComfortSandals1.jpg",
        price: "989",
        heading: "Al PASO",
        subheading: "Mens comfort sandals",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/26/wqgU0iLZ_5922523907c64f4ea4a13d8962f1ce16.jpg",
        price: "678",
        heading: "Killer",
        subheading: "Comfort sandals",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26721338/2024/4/2/b1f37f3b-977b-40c9-bfe9-bdbe241724fe1712032617338-US-Polo-Assn-Men-Round-Toe-Sneakers-3311712032617201-11.jpg",
        price: "678",
        heading: "US POLO",
        subheading: "Mens Toe Sneakers",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/28/KyrjkeHd_c8a41fec58b24b74a62bdd74c04c07d9.jpg",
        price: "1078",
        heading: "Red Tape",
        subheading: "Mens Sneakers",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/26/xaozCw1K_a5e5eaf10659443c8afe637174bb993e.jpg",
        price: "468",
        heading: "Style High",
        subheading: "Men Printed Slider",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/22/UhP08HND_c8730feb76a8428c8635fd0300a47b3f.jpg",
        price: "668",
        heading: "Sneak Lab",
        subheading: "Men Sandals",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/32588624/2025/5/30/391fced1-668c-4ed7-a8c8-bbdef459a6301748587678948-Puma-ProFoam-Fuego-Men-Running-Shoes-1391748587678334-1.jpg",
        price: "3089",
        heading: "Puma",
        subheading: "Men Shoes",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21230650/2023/3/14/cc7f56c0-6fef-4d46-b0cd-6e0f4971337f1678788646277-FAUSTO-Men-Formal-Derbys-9361678788646234-7.jpg",
        price: "1289",
        heading: "Fausto",
        subheading: "Men Shoes",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/21/YX8c1Y6Q_bd2d7ec9b66542d3b292629cdb593172.jpg",
        price: "789",
        heading: "Here and Now",
        subheading: "Men Shoes",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27950776/2024/2/29/b7dff6b8-7368-4151-b461-83d5e6f66c8c1709208274943FlipFlops1.jpg",
        price: "2489",
        heading: "Redtape",
        subheading: "Men Sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26967952/2024/1/18/70a48122-972e-4660-bd6e-5d474d7a9c251705518383749ElPasoMenBrownComfortSandals1.jpg",
        price: "3089",
        heading: "ElPaso",
        subheading: "Men Sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30028095/2024/6/25/b6f8088e-2e05-4a6b-af0b-75466dfbe7061719323057965MastHarbourMenStripedRubberSliders1.jpg",
        price: "3089",
        heading: "Mast N Harbour",
        subheading: "Men Sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/31/amTkErEa_8f73333442b44ffa9a9211d40cb20c79.jpg",
        price: "1189",
        heading: "Liberty",
        subheading: "Men Sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/10/HW256b6d_f10da2c8159342e2a6bb5b463c55a34d.jpg",
        price: "889",
        heading: "Softy and Vegan",
        subheading: "Men Sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18043676/2022/8/4/92ddcc8a-6003-496d-bb25-fee755c549df1659630772131CampusMenWhiteMeshRunningShoes1.jpg",
        price: "1222",
        heading: "Campus",
        subheading: "Men Running shoes ",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/1/MKTXQ342_7c54913d226c4881967e1306f4b9186a.jpg",
        price: "1099",
        heading: "Liberty",
        subheading: "Men Cricket shoes ",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/JULY/29/6xDjrKNT_1c000df180b841b690cd7ac98984e554.jpg",
        price: "1022",
        heading: "Asian",
        subheading: "Men shoes ",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27397640/2024/2/7/58621d39-0cfd-482a-b8b5-74b69aacbb941707291928036RedTapeMenPrintedSliders1.jpg",
        price: "422",
        heading: "Redtape",
        subheading: "Men sliders",
      },
      {
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/28/vqIVr2Zp_6a09d490672d4500861a4f061e46b95d.jpg",
        price: "672",
        heading: "ProPride",
        subheading: "Men Running shoes ",
      },
    ],
  },
  "brands/lancer": {
    title: "lancer& Backpacks mes",
    description: "Travel in style with our range",
    items: [{}],
  },
};

export default productData;
