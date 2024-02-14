import React from "react";
import { useRouteError } from "react-router";
export default function SinglePageError() {
  const error = useRouteError();
  console.log(error);
  return <div>SinglePageError</div>;
}
