import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "$6",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "$10",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "$12",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "$12",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "$15",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "$18",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Creazy Cheezy Pizza</h1>;
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine, 6 creative dishes to choose from. All from
        our store oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>
    </div>
  );
}

function Pizza(props) {
  return (
    <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
        {/* <span>{props.pizzaObj.soldOut ? null : "$"}</span> */}
      </div>
    </div>
  );
}

function Footer() {
  const time = new Date().getHours();
  console.log(time);
  const openAt = 18;
  const closeAt = 24;
  const isOpen = time >= openAt && time <= closeAt;
  console.log(isOpen);

  return (
    <div className="footer">
      <div className="order">
        {isOpen ? (
          <p>We are open until {closeAt}:00. Come visit us or order online.</p>
        ) : (
          <p>Sorry! currently closed will open at {openAt}:00</p>
        )}
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
