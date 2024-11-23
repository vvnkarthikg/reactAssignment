import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTileSelected } from '../store/slices/tileSlice';

const TileComponent = ({ title }) => {
  const dispatch = useDispatch();
  const tileSelected = useSelector((state) => state.tileSelected);
  const [isTileClicked, setIsTileClicked] = useState(false);

  const handleClick = () => {
    dispatch(updateTileSelected(title));
    setIsTileClicked(true);
    console.log('Tile Selected:', tileSelected);  // Log to verify the store state
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        flex: '1 1 30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {isTileClicked && <p style={{ color: 'green' }}>Tile {title} has been clicked!</p>}
      <button onClick={handleClick}>Select Tile</button>
    </div>
  );
};

export default TileComponent;
