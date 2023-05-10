import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Header from "./Components/NavBar/Header";
import Footer from "./Components/NavBar/Footer";

import FAQ from "./Components/NavBar/FAQ";
import AboutUs from "./Components/NavBar/AboutUs";
import ContactUs from "./Components/NavBar/ContactUs";

import Events from "./Components/Event/Events";
import NewEvent from "./Components/Event/NewEvent";
import EventDetails from "./Components/Event/EventDetails";


import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import PasswordReset from "./Components/Auth/PasswordReset";

import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/Events" element={<Events />} />
        <Route path="/newEvent" element={<NewEvent />} />
        <Route path="/EventDetails/:id" element={<EventDetails />} />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
