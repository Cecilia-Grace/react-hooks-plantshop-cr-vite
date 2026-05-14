import { useState } from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant    //initialized to plant as user will not interact with it
  const [isInStock, setIsInStock] = useState(true)    //state for stock that the user interacts with

  function toggleStock() {    //function that handles the toggle 'isInStock' state
    setIsInStock(!isInStock)  //to be true or false
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (    //handles the true or false
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
