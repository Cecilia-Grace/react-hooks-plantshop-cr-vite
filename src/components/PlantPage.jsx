import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const API = 'http://localhost:6001/plants'
  const[search, setSearch] = useState('')


  //READ from the API
  async function fetchPlants() {
    const response = await fetch(API)
    const data = await response.json()

    setPlants(data)   //data from the API is now in plants array
    }

  useEffect(() =>{    //ensures the data is fetched once
    fetchPlants()
  },[])

  function handleAddPlant(newPlant) {   //adds the new plant to the plants list
    setPlants((prevPlants) => [...prevPlants, newPlant])
  }

  const filteredPlants = plants.filter((plant) =>(
      plant.name.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <main>

      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
