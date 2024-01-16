import FormPage from "./components/FormPage/FormPage";
import React, { useEffect, useState } from "react";
import ShowData from "./components/FormPage/ShowData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
    setData(storedData);
  }, []);

  const addUserDataHandler = (jsonString) => {
    const retrieveData = JSON.parse(jsonString);
    setData((prevData) => [...prevData, retrieveData]);
  };

  // Filter data for each table
  const table1Data = data.filter((item) => item.table === "Table1");
  const table2Data = data.filter((item) => item.table === "Table2");
  const table3Data = data.filter((item) => item.table === "Table3");

  // Inside App component
  const deleteOrderHandler = (orderID) => {
    // Remove the order from the state
    setData((prevData) => prevData.filter((order) => order.ID !== orderID));

    // Remove the order from local storage
    localStorage.removeItem(orderID);
  };

  return (
    <div>
      <FormPage addUserData={addUserDataHandler}></FormPage>
      <h2>Orders:</h2>
      <ShowData
        tableNumber="Table1"
        data={table1Data}
        deleteOrder={deleteOrderHandler}
      />
      <ShowData
        tableNumber="Table2"
        data={table2Data}
        deleteOrder={deleteOrderHandler}
      />
      <ShowData
        tableNumber="Table3"
        data={table3Data}
        deleteOrder={deleteOrderHandler}
      />
    </div>
  );
}

export default App;
