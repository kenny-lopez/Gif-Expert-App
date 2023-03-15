import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

import "./GifExpertApp.css";

const GifExpertReact = () => {

  const [categories, setCategories] = useState(["One Punch Man"]);
  
  const categoriesMap = categories.map((category) => (
    <GifGrid 
      key={ category }
      category={ category }     
    />
  ));
  
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={ setCategories }/>
      <div>{ categoriesMap }</div>
    </>
  );
};

export default GifExpertReact;
