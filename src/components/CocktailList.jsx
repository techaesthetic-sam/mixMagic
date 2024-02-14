import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

export default function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found... </h4>
    );
  }
  const formattedDrinks = drinks.map((el) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = el;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((el) => {
        return <CocktailCard key={el.id} {...el} />;
      })}
    </Wrapper>
  );
}
