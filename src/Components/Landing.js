import React, { useState } from "react";
import { Header } from "./UI/Header";
import FourkMovies from "./UI/FourkMovies";

const Landing = () => {
  return (
    <section>
      <Header />
      <FourkMovies />
    </section>
  );
};

export default Landing;
