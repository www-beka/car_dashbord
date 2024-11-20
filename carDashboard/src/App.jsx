import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import SideBar from "./Components/SideBar";
import NoPage from "./Components/NoPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
