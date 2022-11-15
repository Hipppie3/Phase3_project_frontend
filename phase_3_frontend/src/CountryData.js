import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryData({ foods }) {
  const [countryDetails, setCountryDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/food/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetails(data);
      });
  }, [id]);

  console.log(countryDetails);

  if (!countryDetails) return <h2>Loading...</h2>;

  const {
    name,
    dishOne,
    dishOneImage,
    dishOneDescription,
    dishTwo,
    dishTwoImage,
    dishTwoDescription,
    dishThree,
    dishThreeImage,
    dishThreeDescription,
    attractionOne,
    attractionOneImage,
    attractionOneDescription,
    attractionTwo,
    attractionTwoImage,
    attractionTwoDescription,
    attractionThree,
    attractionThreeImage,
    attractionThreeDescription,
  } = countryDetails;

  foods.map((food) => {
    return <Link to={`/Country/${food.id}`}>{foods[food]}</Link>;
  });

  return (
    <Card>
      <table>
        <tr>{name}</tr>
        <tr>{id}</tr>
        <tr>{dishOne}</tr>
        <tr>
          <img className="countryImage" src={dishOneImage} alt="" />
        </tr>
        <tr>{dishOneDescription}</tr>
        <tr>{dishTwo}</tr>
        <tr>
          <img className="countryImage" src={dishTwoImage} alt="" />
        </tr>
        <tr>{dishTwoDescription}</tr>
        <tr>{dishThree}</tr>
        <tr>
          <img className="countryImage" src={dishThreeImage} alt="" />
        </tr>
        <tr>{dishThreeDescription}</tr>
        <tr>{attractionOne}</tr>
        <tr>
          <img className="countryImage" src={attractionOneImage} alt="" />
        </tr>
        <tr>{attractionOneDescription}</tr>
        <tr>{attractionTwo}</tr>
        <tr>
          <img className="countryImage" src={attractionTwoImage} alt="" />
        </tr>
        <tr>{attractionTwoDescription}</tr>
        <tr>{attractionThree}</tr>
        <tr>
          <img className="countryImage" src={attractionThreeImage} alt="" />
        </tr>
        <tr>{attractionThreeDescription}</tr>
      </table>
    </Card>
  );
}

export default CountryData;
