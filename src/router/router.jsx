import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import App from '../App'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import UploadVideopopup from '../pages/UploadVideopopup'
import MyChanelEmptypg from '../Components/MyChanelEmptypg'
import ChanelPlaylistpg from '../Components/ChanelPlaylistpg'
import Mychaneltweetpg from '../Components/Mychaneltweetpg'
import ChanelSubscribeList from '../Components/ChanelSubscribeList'
import Editpersonalinfo from '../Components/Editpersonalinfo'
import Editchanelinfopg from '../Components/Editchanelinfopg'
import Changepasswordpg from '../Components/Changepasswordpg'
import AdminDashboardpg from '../Components/AdminDashboardpg'
import ChanelEmptyplaylist from '../Components/ChanelEmptyplaylist'
import ChanelEmptyTweetpg from '../Components/ChanelEmptyvideopg'
import ChanelEmptyvideopg from '../Components/ChanelEmptyvideopg'
import ChanelPlaylistVideopg from '../Components/ChanelPlaylistVideopg'
import EditDashbordvideopopup from '../Components/EditDashbordvideopopup'
import ChanelVideolist from '../Components/ChanelVideolist'
import EmptyVideoPage from '../Components/EmptyVideoPage'
import EmpySubscribpg from '../Components/EmpySubscribpg'
import MychanelemptyTweetpg from '../Components/MuchanelemptyTweetpg'
import UploadingVideoPopup from '../Components/UploadingVideoPopup'
import UploadvideoSucessful from '../Components/UploadvideoSucessful'
import VideoListPage from '../Components/VideoListPage'
import PricvacyPolicypg from '../pages/PricvacyPolicypg'
import TermsCondition from '../pages/TermsCondition'
import VideoDetailpage from '../Components/VideoDetailpage'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
            {
                path : "UploadVideopopup",
                element : <UploadVideopopup/>
            },
            {
                path : "MyChanelEmptypg",
                element : <MyChanelEmptypg/>
            },
            {
                path : "ChanelPlaylistpg",
                element : <ChanelPlaylistpg/>
            },
            {
                path : "Mychaneltweetpg",
                element : <Mychaneltweetpg/>
            },
            {
                path : "ChanelSubscribeList",
                element : <ChanelSubscribeList/>
            },
            {
                path : "Editpersonalinfo",
                element : <Editpersonalinfo/>
            },
            {
                path : "Editchanelinfopg",
                element : <Editchanelinfopg/>
            },
    
            {
                path : "Changepasswordpg",
                element : <Changepasswordpg/>
            },
    
            {
                path : "AdminDashboardpg",
                element : <AdminDashboardpg/>
            },
            {
                path : "ChanelEmptyplaylist",
                element : <ChanelEmptyplaylist/>
            },
            {
                path : "ChanelEmptyTweetpg",
                element : <ChanelEmptyTweetpg/>
            },
            {
                path : "ChanelEmptyvideopg",
                element : <ChanelEmptyvideopg/>
            },
            {
                path : "ChanelPlaylistVideopg",
                element : <ChanelPlaylistVideopg/>
            },
            {
                path : "EditDashbordvideopopup",
                element : <EditDashbordvideopopup/>
            },
            {
                path : "ChanelVideolist",
                element : <ChanelVideolist/>
            },
            {
                path : "EmptyVideoPage",
                element : <EmptyVideoPage/>
            },
            {
                path : "EmpySubscribpg",
                element : <EmpySubscribpg/>
            },
            {
                path : "MychanelemptyTweetpg",
                element : <MychanelemptyTweetpg/>
            },
            {
                path : "UploadingVideoPopup",
                element : <UploadingVideoPopup/>
            },
    
            {
                path : "UploadvideoSucessful",
                element : <UploadvideoSucessful/>
            },
            {
                path : "VideoListPage",
                element : <VideoListPage/>
            },
            {
                path : "VideoDetailpage",
                element : <VideoDetailpage/>
            },
            {
                path : "PricvacyPolicypg",
                element : <PricvacyPolicypg/>
            },
            {
                path : "TermsCondition",
                element : <TermsCondition/>
            },
    
        ]
        
    }
])


export default router