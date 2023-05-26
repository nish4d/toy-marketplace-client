import { Helmet } from "react-helmet";
import AboutUs from "../AboutUs/AboutUs";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import SocialPost from "../SocialPost/SocialPost";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>AT BUNNY</title>
    </Helmet>
      <Hero></Hero>
      <Gallery></Gallery>
      <Categories></Categories>
      <AboutUs></AboutUs>
      <SocialPost></SocialPost>
      
    </div>
  );
};

export default Home;
