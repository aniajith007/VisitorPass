import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Pages/Visitor_in/Body";
import PrintComp from "./Components/PrintComponent/PrintComp";
import HorizontalCard from "./Components/Testprintform";
import SignInSide from "./Pages/Login/Login";
import Dash from "./Pages/DashBoard/Dash";
import MainPage from "./MainPage";
import MainLayout from "./Components/Sidebar/SideBar";
import RouteProtect from "./Hooks/RouteProtect";
import NotFound from "./Pages/ErrorPage/NotFound";
import LogoutPage from "./Pages/LogoutPage";

function App() {
  return (
    <>
      {/* <PrintComp/> */}
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/Main" element={<MainPage />}>
            <Route index element={<Dash />} />
            <Route path="dashboard" element={<Dash />} />
            <Route path="visitor-portal" element={<Body />} />{" "}
          </Route>
        </Routes>
      */}
      
      {/* <Routes>        
          <Route path="/" element={<SignInSide />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Main" element={<RouteProtect><MainLayout /></RouteProtect>}>
            <Route index element={<RouteProtect><Dash /></RouteProtect>} />
            <Route path="dashboard" element={<RouteProtect><Dash /></RouteProtect>} />
            <Route path="visitor-portal" element={<RouteProtect><Body /></RouteProtect>} />{" "}            
          </Route>
        </Routes> */}

        {/* Git */}
        <Routes>        
          <Route path="/VisitorPass" element={<SignInSide />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Main" element={<RouteProtect><MainLayout /></RouteProtect>}>
            <Route index element={<RouteProtect><Dash /></RouteProtect>} />
            <Route path="dashboard" element={<RouteProtect><Dash /></RouteProtect>} />
            <Route path="visitor-portal" element={<RouteProtect><Body /></RouteProtect>} />{" "}            
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
