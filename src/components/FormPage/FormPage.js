import React, {useState} from "react";

const FormPage = () => {
    const[orderID, setOrderID] = useState('');
    const[price, setPrice] = useState('');
    const[dish, setDish] = useState('');
    const[tableNumber, setTableNumber] = useState('');

    const orderHandler = (event) => {
        setOrderID(event.target.value);
    }

    const priceHandler = (event) => {
        setPrice(event.target.value);
    }

    const dishHandler = (event) => {
        setDish(event.target.value);
    }

    const tableHandler = (event) => {
        setTableNumber(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const obj = {
            ID : orderID,
            cost : price,
            food : dish,
            table : tableNumber
        }
        const jsonString = JSON.stringify(obj);
        localStorage.setItem(obj.ID, jsonString);

        setOrderID('');
        setPrice('');
        setDish('');
        setTableNumber('');

    }

    return (
        <form onSubmit={submitHandler}>
            <label for="OrderID" style={{marginRight: "0.25rem"}}>Unique Order ID:</label>
            <input type="number" style={{marginRight:"1rem"}} value={orderID} onChange={orderHandler}></input>
            <label for="Price" style={{marginRight: "0.25rem"}}>Choose Price:</label>
            <input type="number" style={{marginRight:"1rem"}} value={price} onChange={priceHandler}></input>
            <label for="Dish" style={{marginRight: "0.25rem"}}>Choose Dish:</label>
            <input type="text" style={{marginRight:"1rem"}} value={dish} onChange={dishHandler}></input>
            <label for="Table" style={{marginRight: "0.25rem"}}>Choose a Table:</label> 
            <select value={tableNumber} onChange={tableHandler}>
                <option value="">Select Table</option>
                <option value="Table1">Table1</option>
                <option value="Table2">Table2</option>
                <option value="Table3">Table3</option>
            </select>
            <button type="submit" style={{marginLeft: "0.50rem"}}>Add to Bill</button>
        </form>
    )
}

export default FormPage;