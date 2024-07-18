import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Internship from "../pages/Internship.jsx";
import Userprofile from"../pages/Userprofile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Phonebook from "../pages/Phonebook.jsx";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/internship" element={<Layout><Internship /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Userprofile/></Layout>} />     
        <Route path="/phonebook" element={<Layout><Phonebook/></Layout>} />
        </Routes>

    </BrowserRouter>
  );
}

export default Router;

