// import logo from './logo.svg';
// import './App.css';

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from "./component/Home/Home";
// import Layout from './component/Lyout/Lyout';
// import Nav from './component/Nav/Nav';
// import SecHome from './component/About us/SecHome';
// import All from './component/All Products/All';
// import Table from './component/Our story/ourstory';
// import Crokery from './component/Crokery/Crokery';
// import Productdetials from './component/Home/Productdetials';
// import Prouducts from './component/Prouducts/Prouducts';
// import homeslide from './component/HomeSlider/homeslide';
// import Suits from './component/Suits/Suits';
// import Suitsdetails from './component/Suits/Suitsdetials';
// import Allpage from './component/All Products/Allpage';
// import { CartProvider } from './CartContext';
// import VideoHome from './component/Video comp/Video';
// import Footer from './component/Footer/Footer';
// import React, { Suspense, useState } from 'react';
// import OtherComponent from './OtherComponent';

// export function App() {


//   let routers = createBrowserRouter([
//     {
//       path: '/', element: <Layout />, children: [
//         { path:'/', element:<Home/> },
//         { path: 'action3', element:<SecHome /> },
//         { path: 'AllProducts', element:<All /> },
//         { path: 'crockery', element:<Crokery/>},
//         {path: "/Productdetials/:id" ,element:<Productdetials />},
//         {path: "/Prouducts" ,element:<Prouducts />},
//         {path: "homeslide" ,element:<homeslide />},
//         {path: "/Suits" ,element:<Suits />}, 
//         {path: "video" ,element:<VideoHome />}, 
//         {path: "/Allpage/:id" ,element:<Allpage />}, 
//         {path: "/Suitsdetails/:id" ,element:<Suitsdetails />}, 
//       ]
//       }
//     ])
//   return <>
//     <RouterProvider router={routers}></RouterProvider>
// </>
// }
// export default App;



import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./component/Home/Home";
import Layout from './component/Lyout/Lyout';
import SecHome from './component/About us/SecHome';
import All from './component/All Products/All';
import Productdetials from './component/Home/Productdetials';
import Prouducts from './component/Prouducts/Prouducts';
import homeslide from './component/HomeSlider/homeslide';
import Suits from './component/Suits/Suits';
import Suitsdetails from './component/Suits/Suitsdetials';
import Allpage from './component/All Products/Allpage';
import VideoHome from './component/Video comp/Video';
import Footer from './component/Footer/Footer';
import LoadingIndicator from './LoadingIndicator';


export function App() {

let routers = createBrowserRouter([  
    {
      path: '/', element: <Layout />, children: [
        { index:'/', element:<Home/> },
        { path: 'action3', element:<SecHome /> },
        { path: 'AllProducts', element:<All /> },
        { path: "/Productdetials/:id" ,element:<Productdetials />},
        { path: "/Prouducts" ,element:<Prouducts />},
        { path: "homeslide" ,element:<homeslide />},
        { path: "/Suits" ,element:<Suits />}, 
        { path: "video" ,element:<VideoHome />}, 
        { path: "/Allpage/:id" ,element:<Allpage />}, 
        { path: "/Suitsdetails/:id" ,element:<Suitsdetails />},         
      ]
    }
  ])
  return <>
    <Suspense fallback={<LoadingIndicator />}>
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
</>;
}
export default App;
