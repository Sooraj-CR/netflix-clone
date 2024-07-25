import Navbar from "../../Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../../assets/hero_banner.jpg";
import hero_title from "../../../assets/hero_title.png";
import play_icon from "../../../assets/play_icon.png";
import info_icon from "../../../assets/info_icon.png";
import Titlecards from "../../Titlecards/Titlecards";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className="banner_image" />
        <div className="hero_caption">
          <img src={hero_title} alt="hero title" className="caption_img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save city from an immortal
            enemy
          </p>
          <div className="hero_btns">
            <button className="button">
              <img src={play_icon} alt="play button icon" />
              Play
            </button>
            <button className="dark_button">
              <img src={info_icon} alt="more info icon" />
              More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movie"} category={"top_rated"} />
        <Titlecards title={"Only on Netflix"} category={"popular"} />
        <Titlecards title={"Upcoming"} category={"upcoming"} />
        <Titlecards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
