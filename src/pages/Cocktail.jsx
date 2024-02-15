import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const object = [
  {
    strIngredient1: "Tequila",
    strIngredient2: "Blue Curacao",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
  },
];

const result = object.reduce((acc, cur) => {
  const key = Object.keys(cur);

  for (let key in cur) {
    if (key.startsWith("strIngredient") && cur[key] !== null) {
      acc.push(cur[key]);
    }
  }
  return acc;
}, []);

console.log(result.join(", "));
// const test = [{ x: 1 }, { x: 1 }, { y: 1 }, { y: 1 }, { z: 1 }];

// const uniquePairs = test.reduce((acc, item) => {
//     const key = Object.keys(item);
//     const value = item[key];

//     const existingObj = acc.find((obj) => obj[key] === value);
//     if (!existingObj) {
//       acc.push({ [key]: value });
//     }

//     return acc;
//   }, []);

//   console.log(uniquePairs);

///////////////////////////////////////////////////////////////////////////////////////////
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params: { id } }) => {
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};

export default function Cocktail() {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];
  //console.log(singleDrink);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>

          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
          {/* <p>
            ingredients :
            {result.map((el) => {
              let array = el;
              let commaSeparated = array.join(", ");

              return <span key={el}>{commaSeparated}</span>;
            })}
          </p> */}
        </div>
      </div>
    </Wrapper>
  );
}
