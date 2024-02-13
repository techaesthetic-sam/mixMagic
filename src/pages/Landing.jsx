import React from "react";
import { useLoaderData } from "react-router";

export const loader = async () => {
  return "Samhith";
};
export default function Landing() {
  const data = useLoaderData();
  //console.log(data);
  return <div>Landing</div>;
}
