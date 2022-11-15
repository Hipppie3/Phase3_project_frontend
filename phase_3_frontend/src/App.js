import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CountryData from "./CountryData";

function App() {
  const [content, setContent] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/food")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              foods={foods}
              setFoods={setFoods}
              content={content}
              setContent={setContent}
            />
          }
        />
        <Route path="/Country/:id" element={<CountryData foods={foods} />} />
      </Routes>
    </>
  );
}

export default App;
