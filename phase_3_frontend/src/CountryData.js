import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CountryData({ countries }) {
  const [countryDetails, setCountryDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/country/${id}`)
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
    // flag,
  } = countryDetails;

  countries.map((country) => {
    return <Link to={`/Country/${country.id}`}>{countries[country]}</Link>;
  });

  //   const myStyle = {
  //     backgroundImage: `url(${flag})`,
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     backgroundAttachment: "fixed",
  //     backgroundColor: "#000000",
  //     height: "1000px",
  //     margin: "0 auto",
  //   };

  return (
    <div>
      <h1 className="card">{name}</h1>
      <h3 className="card">
        <u>National Dishes</u>
      </h3>
      <div className="card">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dishOneImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dishOne}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dishOneDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dishTwoImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dishTwo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dishTwoDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dishThreeImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dishThree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dishThreeDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <h3 className="card">
        <u>Attractions</u>
      </h3>
      <div className="card">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={attractionOneImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {attractionOne}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {attractionOneDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={attractionTwoImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {attractionTwo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {attractionTwoDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={attractionThreeImage}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {attractionThree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {attractionThreeDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default CountryData;
