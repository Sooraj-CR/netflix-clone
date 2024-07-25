import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import x_logo from "../../assets/x_logo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_icon">
        <img src={facebook_icon} alt="facebook icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        <img src={x_logo} alt="x icon" />
        <img src={youtube_icon} alt="youtube icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>helps Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>investor Relationship</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright_text">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
