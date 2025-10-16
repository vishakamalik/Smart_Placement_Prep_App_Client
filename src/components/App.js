import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";
import CardContainer from "./CardContainer";
import Header from "./Header";
import HomePage from "./HomePage";

/** react routes */
const router = createBrowserRouter([
  { path: "/", element: <><HomePage/></> },
  {
    path: "/home",
    element: (
      <>
        <Header />
        <CardContainer />
      </>
    ),
  },
  {
    path: "/test",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
