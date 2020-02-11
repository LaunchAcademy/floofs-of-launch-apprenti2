import React from "react";
import data from "../constants/data";
import DogTile from "./DogTile";
import CatTile from "./CatTile";

const App = props => {
  let dogTiles = [];
  data.dogs.forEach(dog => {
    dogTiles.push(<DogTile dog={dog} />);
  });

  const catTiles = data.cats.map(cat => {
    return <CatTile cat={cat} />;
  });

  const catTiles = [
    <CatTile cat={data.cats[0]} />,
    <CatTile cat={data.cats[1]} />,
    <CatTile cat={data.cats[2]} />
  ];
  return (
    <div className="app">
      <h1>Place Fluffballs here</h1>
      {dogTiles}
      {catTiles}
    </div>
  );
};

export default App;
