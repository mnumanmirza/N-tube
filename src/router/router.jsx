// ✅ Step 1: Create AuthCheck (wrapper for Private Routes)
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// ✅ Step 2: Setup Router
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Private Components
import UploadVideopopup from "../pages/UploadVideopopup";
import MyChanelEmptypg from "../Components/MyChanelEmptypg";
import ChanelPlaylistpg from "../Components/ChanelPlaylistpg";
import Mychaneltweetpg from "../Components/Mychaneltweetpg";
import ChanelSubscribeList from "../Components/ChanelSubscribeList";
import Editpersonalinfo from "../Components/Editpersonalinfo";
import Editchanelinfopg from "../Components/Editchanelinfopg";
import Changepasswordpg from "../Components/Changepasswordpg";
import AdminDashboardpg from "../Components/AdminDashboardpg";
import ChanelEmptyplaylist from "../Components/ChanelEmptyplaylist";
import ChanelEmptyTweetpg from "../Components/ChanelEmptyTweetpg";
import ChanelEmptyvideopg from "../Components/ChanelEmptyvideopg";
import ChanelPlaylistVideopg from "../Components/ChanelPlaylistVideopg";
import EditDashbordvideopopup from "../Components/EditDashbordvideopopup";
import ChanelVideolist from "../Components/ChanelVideolist";
import EmptyVideoPage from "../Components/EmptyVideoPage";
import EmpySubscribpg from "../Components/EmpySubscribpg";
import MychanelemptyTweetpg from "../Components/MuchanelemptyTweetpg";
import UploadingVideoPopup from "../Components/UploadingVideoPopup";
import UploadvideoSucessful from "../Components/UploadvideoSucessful";
import VideoListPage from "../Components/VideoListPage";
import PricvacyPolicypg from "../pages/PricvacyPolicypg";
import TermsCondition from "../pages/TermsCondition";
import VideoDetailpage from "../Components/VideoDetailpage";
import LikeVideo from "../pages/LikeVideo";
import History from "../pages/History";
import MyCollection from "../pages/MyCollection";
import Subscribers from "../pages/Subscibers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ✅ Public Routes
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      // ✅ Private Routes Wrapper
      {
        element: <PrivateRoute />,
        children: [
          { path: "LikeVideo", element: <LikeVideo /> },
          { path: "History", element: <History /> },
          { path: "MyCollection", element: <MyCollection /> },
          { path: "Subscribers", element: <Subscribers /> },
          { path: "UploadVideopopup", element: <UploadVideopopup /> },
          {
            path: "MyChanelEmptypg",
            element: <MyChanelEmptypg />,
            children: [
              { path: "ChanelSubscribeList", element: <ChanelSubscribeList /> },
            ],
          },
          { path: "ChanelPlaylistpg", element: <ChanelPlaylistpg /> },
          { path: "Mychaneltweetpg", element: <Mychaneltweetpg /> },
          { path: "Editpersonalinfo", element: <Editpersonalinfo /> },
          { path: "Editchanelinfopg", element: <Editchanelinfopg /> },
          { path: "Changepasswordpg", element: <Changepasswordpg /> },
          { path: "AdminDashboardpg", element: <AdminDashboardpg /> },
          { path: "ChanelEmptyplaylist", element: <ChanelEmptyplaylist /> },
          { path: "ChanelEmptyTweetpg", element: <ChanelEmptyTweetpg /> },
          { path: "ChanelEmptyvideopg", element: <ChanelEmptyvideopg /> },
          { path: "ChanelPlaylistVideopg", element: <ChanelPlaylistVideopg /> },
          { path: "EditDashbordvideopopup", element: <EditDashbordvideopopup /> },
          { path: "ChanelVideolist", element: <ChanelVideolist /> },
          { path: "EmptyVideoPage", element: <EmptyVideoPage /> },
          { path: "EmpySubscribpg", element: <EmpySubscribpg /> },
          { path: "MychanelemptyTweetpg", element: <MychanelemptyTweetpg /> },
          { path: "UploadingVideoPopup", element: <UploadingVideoPopup /> },
          { path: "UploadvideoSucessful", element: <UploadvideoSucessful /> },
          { path: "VideoListPage", element: <VideoListPage /> },
        ],
      },

      // ✅ Public Pages accessible by everyone (even without login)
      { path: "PricvacyPolicypg", element: <PricvacyPolicypg /> },
      { path: "TermsCondition", element: <TermsCondition /> },
      { path: "VideoDetailpage", element: <VideoDetailpage /> },
    ],
  },
]);

export default router;