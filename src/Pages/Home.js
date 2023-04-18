import "../Pages/Pages.css";
import { useEffect, useState } from "react";
import ItemsContainer from "../Components/ItemsContainer/ItemsContainer.js";

const Home = () => {
  const [allItems, setAllItems] = useState([]);

  const API = "https://api-easybroker.onrender.com/properties?page=1&limit=20";

  const componentGetMount = async () => {
    const totalItems = await fetch(`${API}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllItems(data.content);
      });
  };

  useEffect(() => {
    componentGetMount();
  }, []);

  return (
    <>
      <h1 className="banner" style={{ textAlign: "center" }}>BSMARTLAB properties application </h1>
      <h2  style={{ marginTop: "10px", marginBottom: "0px", textAlign: "center" }} > These are the Properties available </h2>
      <div className="elementContainer"> <ItemsContainer allItems={allItems} />  </div>
    </>
  );
};

export default Home;
