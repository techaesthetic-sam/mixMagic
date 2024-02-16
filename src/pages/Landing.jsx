import React from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { searchTerm };
  };
export default function Landing() {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(searchCocktailQuery(searchTerm));
  console.log(drinks);
  if (isLoading) {
    return <h4> Loading...</h4>;
  }
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}
