import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CountryData from "./CountryData";

function App() {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/country")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <>
      <div className="background">
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                countries={countries}
                setCountries={setCountries}
                content={content}
                setContent={setContent}
              />
            }
          />
          <Route
            exact
            path="/Country/:id"
            element={<CountryData countries={countries} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
