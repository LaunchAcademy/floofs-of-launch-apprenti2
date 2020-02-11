import React from "react";

const CatTile = props => {
  const { cat } = props;
  return (
    <div className="tile">
      <h2>{cat.name}</h2>
      <p>{cat.personality}</p>
      <img src={cat.image} alt={cat.name} />
      <h4>{cat.human}</h4>
    </div>
  );
};

export default CatTile;
