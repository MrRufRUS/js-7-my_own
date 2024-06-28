import React from 'react';
import HoverCard from './HoverCard';
import './CardGrid.css';

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item, index) => (
        <HoverCard 
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
