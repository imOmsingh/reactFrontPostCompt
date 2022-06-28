
import './App.css';
// import Login from './components/login/Login';
// // import Signup from './components/signup/Signup';
import HeroImage from './components/heroImage/HeroImage';
import Navbar from './components/Navbar/Navbar'
import PostNavBar from './components/postsNavBar/PostNavBar';
import PostSection from './components/postsSection/PostSection';
function App() {



  return (
    <div className="App">
      <Navbar/>
      <HeroImage/>
      <PostNavBar/>
      <PostSection/>
      {/* <Signup/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
