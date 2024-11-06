import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header({ isOpen }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Akio's Pizza Co.</h1>
      {isOpen && <p style={{ fontSize: "24px", color: "orange" }}>Authentic Italian Cuisine</p>}
    </div>
  );
}

function Pizza({ img, name, ingredients, pricing }) {
  return (
    <div className="spinaici">
      <img src={img} width="300px" height="300px" alt={name} />
      <h3>Name: {name}</h3>
      <p>Ingredients: <br />{ingredients}</p>
      <p>Price: ${pricing}</p>
    </div>
  );
}

function Menu() {
  const pizzas = [
    {
      img: "pizzas/spinaci.jpg",
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
      pricing: 10
    },
    {
      img: "pizzas/salamino.jpg",
      name: "Pizza Salamino",
      ingredients: "Tomato, mozzarella, and pepperoni",
      pricing: 15
    },
    {
      img: "pizzas/prosciutto.jpg",
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
      pricing: 18
    },
    {
      img: "pizzas/margherita.jpg",
      name: "Pizza Margherita",
      ingredients: "Tomato and mozzarella",
      pricing: 10
    },
    {
      img: "pizzas/funghi.jpg",
      name: "Pizza Funghi",
      ingredients: "Tomato, mozzarella, mushroom, and onion",
      pricing: 12
    },
    {
      img: "pizzas/focaccia.jpg",
      name: "Pizza Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      pricing: 6
    }
  ];

  return (
    <div className="menu">
      {pizzas.map((pizza, index) => (
        <Pizza
          key={index}
          img={pizza.img}
          name={pizza.name}
          ingredients={pizza.ingredients}
          pricing={pizza.pricing}
        />
      ))}
    </div>
  );
}

function Open() {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>We're currently open</p>
      <button style={{ color: "orange" }}>Order</button>
    </div>
  );
}

function Closed() {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>Sorry, we're closed</p>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <div className="footer" style={{ display: "flex", justifyContent: "center", color: "orange" }}>
      <footer>{isOpen ? <Open /> : <Closed />}</footer>
    </div>
  );
}

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <br />
      <br />
      <Menu />
      <br />
      <br />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

