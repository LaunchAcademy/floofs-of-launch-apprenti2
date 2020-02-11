import React from "react";

const DogTile = props => {
  // const dog = props.dog;
  const { dog } = props;
  return (
    <div className="tile">
      <h2>{dog.name}</h2>
      <h3>{dog.breed}</h3>
      <img src={dog.image} alt={dog.name} />
      <h4>{dog.human}</h4>
    </div>
  );
};

export default DogTile;
