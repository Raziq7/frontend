import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import ChangeAddrss from "./screen/ChangeAddrss";
import ChangPassword from "./screen/ChangePassword";
import ForgetPassword from "./screen/ForgetPassword";
import ImgeUpload from "./screen/ImgeUpload";
import Login from "./screen/Login";
import Profile from "./screen/Profile";
import Signup from "./screen/Signup";
import ViewProfile from "./screen/ViewProfile";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/" element={<Card />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />

          <Route path="/imageUpload" element={<ImgeUpload />} />

          <Route path="/viewProfiles" element={<ViewProfile />} />

          <Route path="/ChangPassword" element={<ChangPassword />} />

          <Route path="/ChangeAddrss" element={<ChangeAddrss />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
