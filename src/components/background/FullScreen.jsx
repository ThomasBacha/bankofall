import React from 'react';
import '../../styles/FullScreenBG.css';

const FullScreenBG = ({ children }) => {
  return (
    <div className="fullscreen-bg">
      {children}
    </div>
  );
};

export default FullScreenBG;
