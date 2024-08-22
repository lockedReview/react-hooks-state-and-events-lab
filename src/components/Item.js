import React, { useState } from "react";

function Item({ name, category }) {
  const [ curName, setCurCat ] = useState("")

  const newClassName = curName ? "in-cart" : "";

  function handleClick(event){
    setCurCat(!curName)
  }

  return (
    <li onClick= {handleClick} className= {newClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">{curName ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
