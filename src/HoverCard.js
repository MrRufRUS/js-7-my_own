import React, { useState } from 'react';
import './HoverCard.css';

const HoverCard = ({ image, title, description }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div 
    className={`hover-card ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    onClick={handleCardClick}
      
    >
      <img src={image} alt={title} className="hover-card-image" />
      <div className="hover-card-overlay">
        <h2 className="hover-card-title">{title}</h2>
        <p className="hover-card-description">{description}</p>
      </div>
    </div>
  );
};

export default HoverCard;
