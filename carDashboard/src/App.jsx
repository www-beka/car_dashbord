import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import SideBar from "./Components/SideBar";
import NoPage from "./Components/NoPage"
import Dashboard from "./Components/Dashboard";
import Layout from "./Components/Layout"
import Assets from "./Components/AssetsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="Assets" element={<Assets />} />
            </Route>
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Layout" element={<Layout />} />
            <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
