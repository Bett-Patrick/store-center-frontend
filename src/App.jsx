import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage';
import OurClients from './components/admin/OurClients';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import Stores from "./components/Stores/Stores.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Signup/SignUp.jsx";
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard.jsx";
import DeliveryForm from "./components/client/Delivery/DeliveryForm.jsx";
import DeliveryServices from "./components/client/Delivery/DeliveryServices.jsx";

import Small from "./components/client/StorageUnits/Small.jsx";
import Medium from "./components/client/StorageUnits/Medium.jsx";
import Large from "./components/client/StorageUnits/Large.jsx";
import AddNewUnit from "./components/admin/AddNewUnit.jsx";
import Layout from "./Layout.jsx";
import BookingPage from "./components/client/BookingPage.jsx";
// import MyUnits from "./components/client/Dashboard/MyUnits.jsx";
import UserDashboard from "./components/client/Dashboard/UserDashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>

        <Route path="" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="stores" element={<Stores />} />
          <Route path="small" element={<Small />} />
          <Route path="medium" element={<Medium />} />
          <Route path="large" element={<Large />} />
           <Route path="/small/BookingPage" element={<BookingPage />} />
          <Route path="/medium/BookingPage" element={<BookingPage />} />
          <Route path="/large/BookingPage" element={<BookingPage />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="MyUnits" element={<UserDashboard/>} />
          <Route path="add-unit" element={<AddNewUnit />}></Route>
          <Route path="deliveries" element={<DeliveryServices />}/>
          <Route path="/deliveries/delivery-form" element={<DeliveryForm/>}/>
        </Route>

          <Route path="/" element={<MainPage />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/delivery-form" element={<DeliveryForm />} />
          <Route path="/delivery-services" element={<DeliveryServices />} />

      </Routes>
      
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
