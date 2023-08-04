import React from 'react';

interface FullScreenBackgroundProps {
    children: React.ReactNode;
}

const FullScreenBackground: React.FC<FullScreenBackgroundProps> = ({ children }) => {

    const backgroundStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#7fc7d9',
        opacity: 0.5,
    };
    
    return (
        <div style={backgroundStyle}>
            {children}
        </div>
    );
};

export default FullScreenBackground;
