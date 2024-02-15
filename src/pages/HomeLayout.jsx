import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/Navbar";
import { useNavigation } from "react-router-dom";

export default function HomeLayout() {
  const navigate = useNavigation();
  // console.log(navigate.state);
  const value = "some";
  return (
    <div>
      <Navbar />
      <section className="page">
        {navigate.state === "loading" ? (
          <h2 className="loading"> loading...</h2>
        ) : (
          <Outlet context={value} />
        )}
      </section>
    </div>
  );
}
