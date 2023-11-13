import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Funfact from "../components/Funfact";
import Course from "../components/Course";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Funfact />
      <Course />
    </>
  );
}

export default Home;
