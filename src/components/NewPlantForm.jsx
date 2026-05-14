import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const API = 'http://localhost:6001/plants'

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  async function addNewPlant(plant) {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    })

    const savedPlant = await response.json()

    onAddPlant(savedPlant)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    addNewPlant(newPlant)

    setName('')
    setImage('')
    setPrice('')

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="Plant name" 
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />

        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image}
          onChange={(e)=> setImage(e.target.value)}
        />

        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
        />

        <button type="submit">Add Plant</button>

      </form>
    </div>
  );
}

export default NewPlantForm;
