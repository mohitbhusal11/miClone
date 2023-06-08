import './App.css';
import PreNavBar from './components/PreNavBar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
// import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
// import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <Router>
      <PreNavBar/>
      <Navbar/>
      <Slider/>
      <Offers offer = {data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text={"PRODUCT REVIEWS"} />
      {/* <HotAccessoriesMenu/> */}
      <ProductReviews productReviews={data.productReviews} />
      <Heading text={"VIDEOS"} />
      <Videos videos={data.videos}/>
      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
