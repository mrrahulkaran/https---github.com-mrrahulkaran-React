/* 

parcel is a bundeler spacilities of parcel
--HMR hot module reloading
--file watcher algorithm writen in c++
--minification
--HMR- Hot model replacement
--Dev and production build
--superfast build algorithm
--Image optimization
-- Suports older version of browsers add polyfilss
*/

// react element

// const heading = React.createElement(
//   "h1",
//   {
//     id:"title",
//     key:"h1",
//   },
//    "heading1"
// );

// react element--------
// const heading = (
//   <div><h1>hy from react element</h1></div>
// );

// const tiitle = (
//   <div>
//     <h1>hy from react element component-- tiitle</h1>
//   </div>
// );

// react component------ 1==functional component 2==Class component

// component Composition----importing component inside another functional component like this---{<heading/>}

// const Headercomponent = function () {
//   return (
//     <div>
//       <Tiitle />
//       {Tiitle()}
//       <h1>Namaste React from h2 hi this is header component</h1>
//       <h2>Namaste React from h1</h2>
//     </div>
//   );
// };

/* header 
     -- logo 
     -- nav items (about us cart contact us)

  Body
    -- Search bar
    --resturant list
    --resturent Cart
           ---img
           --Name
           ---cusins
           ---Rating   
*/
/* React.fragment-- it is a emplty tag that is understood by jsx
   
react say there will be only one parant div but if we want to multiple component to render inside a component then we use React.fragment as a parant div


*/
import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantsList = [
  {
    info: {
      id: "437010",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId:
        "fl_lossy,f_auto,q_auto,w_660/cbffa2f7cba3dcd75ae945d0e06427f5",
      locality: "Vinayak City Centre Mall",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Beverages", "Ice Cream"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-26 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-vinayak-city-centre-mall-civil-lines-allahabad-437010",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253769",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-26 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mahatma-gandhi-marg-civil-lines-allahabad-253769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80320",
      name: "Paradise",
      cloudinaryImageId: "d05df8d6aacc3b02d0935d46108d8f3c",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Cakes and Pastries", "Fast Food"],
      avgRating: 4.4,
      parentId: "155080",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹900",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/paradise-mahatma-gandhi-marg-civil-lines-allahabad-80320",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80703",
      name: "Aryan Family's Delight",
      cloudinaryImageId: "kb34u4pywk49ksbyn4g5",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Fast Food",
        "Snacks",
        "Burgers",
        "Chinese",
      ],
      avgRating: 4.5,
      parentId: "6001",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/aryan-familys-delight-sardar-patel-marg-civil-lines-allahabad-80703",
      type: "WEBLINK",
    },
  },
];

const Title = () => (
  <a href='/'>
    <img
      src='https://yt3.googleusercontent.com/ytc/AIf8zZS3z6ihwP6q2VdS0PftKtQQ6GtHTPgKTFF6p6PC=s900-c-k-c0x00ffffff-no-rj'
      className='logo'
      alt='logo'
    ></img>
  </a>
);

const Header = function () {
  return (
    <div className='header'>
      <Title />
      <ul className='nav-item'>
        <li>Your Order</li>
        <li>Offers</li>
        <li>Cart</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const BurgerKing = {
  name: "Burgur king",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  Cousines: ["Burgur", "American"],
  rating: "4.2",
};

const RestaurantCard = ({ Restraunt }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = Restraunt.info;

  // {
  //   console.log(props.Restraunt.info.name);
  // }
  return (
    <div className='card'>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt='card-img'
      ></img>

      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

const Body = function () {
  return (
    <div className='body'>
      <RestaurantCard Restraunt={RestaurantsList[0]} />
      <RestaurantCard Restraunt={RestaurantsList[1]} />
      <RestaurantCard Restraunt={RestaurantsList[2]} />
      <RestaurantCard Restraunt={RestaurantsList[3]} />
      <RestaurantCard Restraunt={RestaurantsList[0]} />
      <RestaurantCard Restraunt={RestaurantsList[1]} />
      <RestaurantCard Restraunt={RestaurantsList[2]} />
      <RestaurantCard Restraunt={RestaurantsList[3]} />
      <RestaurantCard Restraunt={RestaurantsList[2]} />
      <RestaurantCard Restraunt={RestaurantsList[3]} />
    </div>
  );
};

const Footer = function () {
  return (
    <div className='footer'>
      <h1>footer</h1>
    </div>
  );
};

const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading)
root.render(<Applayout />);
