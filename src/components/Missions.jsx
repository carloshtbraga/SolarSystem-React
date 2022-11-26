import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import Missoes from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {Missoes.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            year={ year }
            name={ name }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
