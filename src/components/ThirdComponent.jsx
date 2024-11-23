import React from 'react';
import TileComponent from './TileComponent';

const ThirdComponent = () => {
  const tiles = ['Tile 1', 'Tile 2', 'Tile 3'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {tiles.map((tile, index) => (
        <TileComponent key={index} title={tile} />
      ))}
    </div>
  );
};

export default ThirdComponent;
