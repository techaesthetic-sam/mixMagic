import React from "react";
import { useLoaderData } from "react-router-dom";
export default function Cocktail() {
  const data = useLoaderData();
  console.log(data);
  return <div>Cocktail</div>;
}
