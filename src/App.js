import React, { lazy, Suspense, useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import ResturantList from "./Components/ResturantList";
import Profile from "./Profile";
import Shimmer from "./Components/Shimmer";
import Instamart from "./Components/Instamart";
import UserContext from "./Utilies/UserContext";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./Utilies/store";

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Shivam",
    email: "shivi29garg@gmail.com",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return !isLoggedIn ? (
    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Instamart",
        element: <Instamart />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:RestroId",
        element: <ResturantList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
