import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Account from "./components/pages/Accont";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
     </Routes>
     </AuthContextProvider>
    </>

  )
}
   
export default App;
