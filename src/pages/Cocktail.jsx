import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params: { id } }) => {
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

export default function Cocktail() {
  const navigate = useNavigate();
  const { id } = useLoaderData();
  // console.log(data.drinks[0]);

  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) {
    return navigate("/");
  }

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  //console.log(name);
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((el) => singleDrink[el]);

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
            <span className="drink-data">instructons : </span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients : </span>{" "}
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
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
