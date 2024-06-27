import './App.css';
import Home from './Home.js';
import Splash from './Splash.js';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Forgotten from './Forgotten.js';
import Pageone from './Pageone.js'
import Pagetwo from './Pagetwo.js'
import Pagethree from './Pagethree.js'
import Navbar from './Navbar.js'
import Pagefour from './Pagefour.js'
import Footer from './Footer.js'
import About from './About.js'
import Complaint from './Complaint.js'
import Wallet from './Wallet.js'
import Profile from './Profile.js'
import Wallettwo from './Wallettwo.js';
import Walletthree from './Walletthree.js';
import Walletfour from './Walletfour.js'
import Profiletwo from './Profiletwo.js'
import Profilethree from './Profilethree.js'
import Addrider from './Addrider.js'
import Confirmation from './Confirmation.js'
import Deleteaccount from './Deleteaccount.js'
import Pagefive from './Pagefive.js'
import Pagesix from './Pagesix.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
  <Routes>
    <Route path="/" element={<Navigate to="/splash" />} />
    <Route path="/splash" element={<Splash />} />
    <Route path="/home" element={<Home />} /> 
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgotten" element={<Forgotten />} />
    <Route path="/pageone" element={<Pageone />} />
    <Route path="/pagetwo" element={<Pagetwo />} />
    <Route path="/pagethree" element={<Pagethree />} />
    <Route path="/Navbar" element={<Navbar />} />
    <Route path="/Pagefour" element={<Pagefour />} />
    <Route path="/About" element={<About />} />
    <Route path="/Complaint" element={<Complaint />} />
    <Route path="/Wallet" element={<Wallet />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Footer" element={<Footer />} />
    <Route path="/Wallettwo" element={<Wallettwo />} />
    <Route path="/Walletthree" element={<Walletthree />} />
    <Route path="/Walletfour" element={<Walletfour />} />
    <Route path="/Profiletwo" element={<Profiletwo />} />
    <Route path="/Profilethree" element={<Profilethree />} />
    <Route path="/Addrider" element={<Addrider />} />
    <Route path="/Deleteaccount" element={<Deleteaccount />} />
    <Route path="/Confirmation" element={<Confirmation />} />
    <Route path="/pagefive" element={<Pagefive />} />
    <Route path="/pagesix" element={<Pagesix />} />
  </Routes>
</Router>
     {/* <Home/>
     <Splash/>
     <Signin/>
     <Signup/>
     <Forgotten/> */}
    </div>
  );
}

export default App;
