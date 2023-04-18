import "../Pages/Pages.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [thisItem, setThisItem] = useState([]);
  const [value, setValue] = useState([]);
  const API = "https://api-easybroker.onrender.com/properties?page=1&limit=20";

  const componentGetMount = async () => {
    const totalItems = await fetch(`${API}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const found = data.content.find((cadaUno) => {
          return cadaUno.public_id == id;
        });
        setThisItem(found);
        setValue(found.operations[0].formatted_amount);
      });
  };

  useEffect(() => {
    componentGetMount();
  }, []);

  return (
    <>
      <div className="detailRow">
        <Link to="/">
          <button className="btn btn-primary">BACK</button>
        </Link>

        <div key={thisItem.public_id} className=" detailItem">
          <h5 > Title: {thisItem.public_id}</h5>
          <p className="descriptionstyle  "> {thisItem.title}</p>
          <img className="picturestyle" src={thisItem.title_image_full} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
          <p className="locationstyle"> {thisItem.location}</p>

          <p className="amountstyle"> Price: {value}</p>
          
          <button onClick={()=>alert("Thanks for buy")} className="btn btn-warning"> Buy NOW!</button>
        </div>
      </div>
    </>
  );
};

export default Details;
