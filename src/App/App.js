import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/LoginSignUp/Login";
import Signup from "../Components/LoginSignUp/Signup";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;