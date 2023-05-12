import "./item.css";
import ItemDate from "./ItemDate";
function Item(props) {
  // console.log(props)
  return (
    <div className="container">
      <ItemDate />
      <div className="name">{props.title}</div>
      <button className="price_btn">$: {props.price}</button>
    </div>
  );
}
export default Item;
