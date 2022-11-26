import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((ele) => (
          <PlanetCard
            key={ ele.name }
            planetImage={ ele.image }
            planetName={ ele.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
