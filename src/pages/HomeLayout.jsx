import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />

      <section className="page">
        <Outlet />
      </section>
    </div>
  );
}
