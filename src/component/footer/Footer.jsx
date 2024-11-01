import { Link } from "react-router-dom";
import "./footer.css";

const SocialMedia = () => {
    return (
        <>
              <div className="footer-social-media">
        <div className="footer-social-media-text">Follw us on social media:</div>
        <div className="footer-secial-media-icons">
          <div className="footer-secial-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram"></i>
          </div>

          <div className="footer-secial-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>

          <div className="footer-secial-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>

          <div className="footer-secial-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>

          <div className="footer-secial-media-icon">
            <i style={{ color: "darkblue" }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
        </>
    )
}

const Links = () => {
    return (
        <>
              <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/authors" className="footer-link">Authors</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/register" className="footer-link">Register</Link>
          </ul>
        </div>

        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Morocco - Sous Massa
            </div>

            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              00-123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@fake_email.com
            </div>
          </div>
        </div>

        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <ul className="footer-links">
            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
          </ul>
        </div>
      </div>
        </>
    )
}

const Footer = () => {
  return (
    <footer className="footer">

        <SocialMedia/>
        <Links/>

    </footer>
  );
};

export default Footer;
