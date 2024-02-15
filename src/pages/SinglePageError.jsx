import React from "react";
import { useRouteError } from "react-router";
export default function SinglePageError() {
  const error = useRouteError();

  return <div>{error.message}</div>;
}
