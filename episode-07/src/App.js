import React from "react";
import ReactDOM from "react-dom/client"
import {Header} from "./components/Header" //name export always import in curley bracket
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider,Outlet  } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResturantMenu from "./components/ResturantMenu"


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/**  Outlet will decide now which component call  **/}
            <Outlet/>

            {/** if path=/ then load <body> component **/}
            {/** if path=/about then load <about> component **/}
            {/** if path=/contact then load <contact > component **/}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([

        {
            path:"/",
            element:<AppLayout></AppLayout>,
            errorElement:<Error/>,
            //outlet will decide now which component as per router
            //children is the configuration
            children:[
                {
                    path:"/",
                    element:<Body></Body>
                },
                {
                    path:"/about",
                    element:<About></About>
                },
                {
                    path:"/contact",
                    element:<Contact></Contact>
                },
                {
                    path:"/resturants/:resId",
                    element:<ResturantMenu/>
                }
            ]
        },

]);

root.render(<RouterProvider router={appRouter}/>)