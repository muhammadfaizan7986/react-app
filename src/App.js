import "./index.css";
import Item from "./components/Items";
import { useState } from "react";
function App() {
  const expense = [
    {
      title: "car insurance",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      price: "2646",
    },
    {
      title: "car tyre",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      price: "246.46",
    },
    {
      title: "car light",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      price: "256.46",
    },
    {
      title: "car seat",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      price: "279.46",
    },
  ];

  return (
    <div>
      {/* <h1>{expense.date.toLocaleString("en_US", { date: "2-digit" })}</h1> */}
      <h1>this is react </h1>
      <Item
        title={expense[0].title}
        date={expense[0].date}
        price={expense[0].price}
      />
      <Item
        title={expense[1].title}
        date={expense[1].date}
        price={expense[1].price}
      />
      <Item
        title={expense[2].title}
        date={expense[2].date}
        price={expense[2].price}
      />
      <Item
        title={expense[3].title}
        date={expense[3].date}
        price={expense[3].price}
      />
    </div>
  );
}
export default App;
