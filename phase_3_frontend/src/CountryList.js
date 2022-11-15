import Country from "./Country";

function CountryList({ foods }) {
  const countryComponents = foods.map((food) => {
    return <Country key={food.id} name={food.name} />;
  });

  return (
    <div>
      <th>Countries:</th>
      {countryComponents}
    </div>
  );
}

export default CountryList;
