import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardComponent from './CardComponent';
import axios from 'axios';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/schedules');
        setSchedules(response.data.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const groupedSchedules = schedules.reduce((acc, schedule) => {
    const game = schedule.attributes.gameName;
    if (!acc[game]) {
      acc[game] = [];
    }

    acc[game].push(schedule);

    return acc;
  }, {});

  return (
    <div id="schedule" className="schedule__wrapper">
      <h2>Matches</h2>
      <div className="schedule__slider">
        <AliceCarousel
          paddingLeft={50}
          paddingRight={50}
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
        >
          {Object.keys(groupedSchedules).map((gameName) => (
            <div className="item" data-value={gameName}>
              <CardComponent gameName={gameName} matches={groupedSchedules[gameName]} />
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Schedule;
