import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Join from "./pages/Join";
import Study from "./pages/Study";
import StudyRoom from "./pages/StudyRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <Layout color="#0D1116" iconColor="#0D1116" />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
    ],
  },
  {
    path: "/study",
    children: [
      {
        path: "",
        element: <Study />,
      },
      {
        path: "room/:id",
        element: <StudyRoom />,
      },
    ],
  },
]);

export default router;
