import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [queryInput, setQueryInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleInputChange(e){
    setQueryInput(e.target.value.toLocaleUpperCase())
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items = {items}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleInputChange}/>
      <ul className="Items">
        {itemsToDisplay.filter((query) => query.name.toUpperCase().includes(queryInput)).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
