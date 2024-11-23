// import React, { useState } from 'react';

// function FirstComponent() {
//   const [buttonClick, setIsButtonClick] = useState(false);

//   const handleClick = () => {
//     setIsButtonClick((previous) => !previous);
//   };

//   return (
//     <div style={{ backgroundColor: '#204c6a', padding: '20px'}}>
//       <h1 style={{ color: 'white' }}>First Component</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {buttonClick && <p style={{ color: 'white' }}>The button has been clicked</p>}
//     </div>
//   );
// }

// export default FirstComponent;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonClicked } from '../store/slices/buttonSlice';

function FirstComponent() {
  // Get the buttonClicked state from the Redux store
  const buttonClick = useSelector((state) => state.button.buttonClicked);
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatch the action to toggle buttonClicked state
    dispatch(updateButtonClicked(!buttonClick));
  };

  useEffect(() => {
    // This effect runs whenever buttonClick state changes (just for demonstration)
    console.log(`Button clicked: ${buttonClick}`);
  }, [buttonClick]);

  return (
    <div style={{ backgroundColor: '#204c6a', padding: '20px' }}>
      <h1 style={{ color: 'white' }}>First Component</h1>
      <button onClick={handleClick}>Click Me</button>
      {buttonClick && <p style={{ color: 'white' }}>The button has been clicked</p>}
    </div>
  );
}

export default FirstComponent;
