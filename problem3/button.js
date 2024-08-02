
import React from 'react';

const Button = ({ variant, children, onClick }) => {
  const renderContent = () => {
    switch (variant) {
      case 'icon-arrow-primary':
        return (
          <button
            style={{ backgroundColor: 'blue', color: 'white' }}
            onClick={onClick}
          >
            <span>&rarr;</span> {children}
          </button>
        );
      case 'icon-arrow-secondary':
        return (
          <button
            style={{ backgroundColor: 'gray', color: 'black' }}
            onClick={onClick}
          >
            <span>&rarr;</span> {children}
          </button>
        );
      case 'primary':
        return (
          <button
            style={{ backgroundColor: 'blue', color: 'white' }}
            onClick={onClick}
          >
            {children}
          </button>
        );
      case 'secondary':
        return (
          <button
            style={{ backgroundColor: 'gray', color: 'black' }}
            onClick={onClick}
          >
            {children}
          </button>
        );
      default:
        return (
          <button onClick={onClick}>
            {children}
          </button>
        );
    }
  };

  return renderContent();
};

export default Button;

