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

// export default Header;

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
//  root.render(heading)

//import And Exports are of two types
//exports by name
//exports by default

{
  /* <div className='body'>
      <Card Restraunt={RestaurantsList[0]} />
      <Card Restraunt={RestaurantsList[1]} />
      <Card Restraunt={RestaurantsList[2]} />
      <Card Restraunt={RestaurantsList[3]} />
      <Card Restraunt={RestaurantsList[0]} />
      <Card Restraunt={RestaurantsList[1]} />
      <Card Restraunt={RestaurantsList[2]} />
      <Card Restraunt={RestaurantsList[3]} />
      <Card Restraunt={RestaurantsList[2]} />
      <Card Restraunt={RestaurantsList[3]} />
    </div> */
}

{
  /* <Card {...RestaurantsList[0].info} />
<Card {...RestaurantsList[1].info} />
<Card {...RestaurantsList[2].info} />
<Card {...RestaurantsList[3].info} />
<Card {...RestaurantsList[0].info} />
<Card {...RestaurantsList[1].info} />
<Card {...RestaurantsList[2].info} />
<Card {...RestaurantsList[3].info} />
<Card {...RestaurantsList[0].info} />
<Card {...RestaurantsList[1].info} /> */
}

{
  /* <Card {...RestaurantsList[0].info} />
      <Card {...RestaurantsList[1].info} />
      <Card {...RestaurantsList[2].info} />
      <Card {...RestaurantsList[3].info} />
      <Card {...RestaurantsList[0].info} />
      <Card {...RestaurantsList[1].info} />
      <Card {...RestaurantsList[2].info} />
      <Card {...RestaurantsList[3].info} />
      <Card {...RestaurantsList[0].info} />
      <Card {...RestaurantsList[1].info} /> */
}
