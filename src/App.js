import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Pages/Visitor_in/Body";
import PrintComp from "./Components/PrintComponent/PrintComp";
import HorizontalCard from "./Components/Testprintform";
import SignInSide from "./Pages/Login/Login";
import Dash from "./Pages/DashBoard/Dash";
import MainPage from "./MainPage";
import MainLayout from "./Components/Sidebar/SideBar";

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
      </BrowserRouter> */}
      <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/Main" element={<MainLayout />}>
            <Route index element={<Dash />} />
            <Route path="dashboard" element={<Dash />} />
            <Route path="visitor-portal" element={<Body />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
