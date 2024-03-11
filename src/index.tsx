import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import PostDataBehaviour from "./components/Post/PostDataBehaviour";
import Error404 from './components/Error404/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404/>,
  },
  {
    path: "/:postID",
    element: <PostDataBehaviour />,
    errorElement: <Error404/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
