import "../ItemsContainer/ItemsContainer.css";
import { Link } from "react-router-dom";

const ItemsContainer = ({ allItems }) => {
  return (
    <>
      {allItems.map((c) => (
        <>
          <Link to={`/Items/${c.public_id}`}>
            <div key={c.public_id} className="containerItem">
              <img className="ItemPicture " src={c.title_image_thumb} />
              <h5> Title: {c.public_id}</h5>
              <p className="containerDescription   ">Description: {c.title}</p>
              <p className="containerLocation">
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
                {c.location}
              </p>
              <p className="containerAmount">
                Price: {c.operations[0].formatted_amount}
              </p>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default ItemsContainer;
