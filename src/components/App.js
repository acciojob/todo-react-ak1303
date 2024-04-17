
import React from "react";
import './../styles/App.css';

const App = () => {
  const categories = ['All','breakfast','lunch','shakes'];
    const [category,setCategory]=useState("All");
    const selectedDishes = menu.filter(dish=> category==='All' || dish.category===category);
    return (
    <>
        <h1 style={{textAlign:"center"}}>Our Menu</h1>
        <Filter categories={categories} category={category} setCategory={setCategory}/>
        <Dishes selectedDishes={selectedDishes}/>
    </>
    )
}

export default App
