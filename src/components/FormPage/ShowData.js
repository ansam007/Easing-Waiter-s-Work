import React from "react";

const ShowData = (props) => {
    const deleteHandler = (orderID) => {
      props.deleteOrder(orderID);
    };
  
    return (
      <div>
        <h4 id={props.tableNumber}>{props.tableNumber} Orders:</h4>
        <ul>
          {props.data.map((order, index) => (
            <li key={index}>
              Order ID: {order.ID}, Price: {order.cost}, Dish: {order.food}
              <button onClick={() => deleteHandler(order.ID)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ShowData;


