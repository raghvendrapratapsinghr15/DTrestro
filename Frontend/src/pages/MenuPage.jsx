import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const menuItems = [
  {
    name: "Margherita Pizza",
    desc: "Classic delight with 100% real mozzarella cheese",
    price: "₹250",
  },
  {
    name: "Veg Biryani",
    desc: "Aromatic basmati rice cooked with fresh vegetables",
    price: "₹180",
  },
  {
    name: "Paneer Butter Masala",
    desc: "Creamy tomato gravy with soft paneer cubes",
    price: "₹220",
  },
  {
    name: "French Fries",
    desc: "Crispy golden fries served with sauce",
    price: "₹120",
  },
  {
    name: "Chocolate Cake",
    desc: "Rich and moist chocolate layered cake",
    price: "₹150",
  },
  {
    name: "Cold Coffee",
    desc: "Chilled coffee blended with cream & chocolate",
    price: "₹130",
  },
];

const MenuPage = () => {
  return (
    <>
      <section className="menu_page">
        <div className="container">
          <div className="menu_top">
            <h1>OUR MENU</h1>
            <p>Delicious food made with love & fresh ingredients</p>
            <Link to="/" className="back_btn">← Back to Home</Link>
          </div>

          <div className="menu_grid">
            {menuItems.map((item, index) => (
              <div className="menu_card" key={index}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MenuPage;