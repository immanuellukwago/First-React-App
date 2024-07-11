import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  //cities = [];

  /* const handleClick = (event: MouseEvent) => {
    console.log(event);
  }; */

  let [selectedItem, setSelectedItem] = useState(-1);

  let [count, setCount] = useState(0);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* cities.length == 0 && <p>No elements Found</p> */}
      <ul className="list-group">
        {/* <li className="list-group-item">Football</li>
        <li className="list-group-item">Basketball</li>
        <li className="list-group-item">Tenias</li>
        <li className="list-group-item">Volleyball</li>
        <li className="list-group-item">Chess</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedItem == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <p></p>
      <p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-success"
        >
          Count is {count}
        </button>
      </p>
    </Fragment>
  );
};

/* function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
 
}
 */
//must do
export default ListGroup;
