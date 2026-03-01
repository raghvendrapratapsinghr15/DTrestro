import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#1f2937", color: "#f3f4f6", padding: "3rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

        {/* Brand & About */}
        <div style={{ flex: "1 1 250px", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>ZEESHU</h2>
          <p style={{ lineHeight: "1.6" }}>
            A premium dining experience in Hajipur, Bihar. Enjoy delicious meals in a cozy and welcoming environment.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <a href="#" style={{ color: "#f3f4f6" }}><FaFacebookF /></a>
            <a href="#" style={{ color: "#f3f4f6" }}><FaInstagram /></a>
            <a href="#" style={{ color: "#f3f4f6" }}><FaTwitter /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact</h3>
          <p><FaPhoneAlt style={{ marginRight: "0.5rem" }} /> +91 1234567890</p>
          <p><FaEnvelope style={{ marginRight: "0.5rem" }} /> info@zeeshu.com</p>
          <p>Address: Hajipur, Bihar, India</p>
          <p>Open: 05:00 PM - 12:00 AM</p>
        </div>

        {/* Credits */}
        <div style={{ flex: "1 1 250px", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>Credits</h3>
          <p>Developed By: Raghvendra Pratap Singh</p>
          <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #374151", marginTop: "2rem", paddingTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} ZEESHU. Designed with by Raghvendra.
      </div>
    </footer>
  );
};

export default Footer;