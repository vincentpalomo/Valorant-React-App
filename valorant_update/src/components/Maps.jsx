import React, { useEffect, useState } from 'react';
import { fetchMaps } from '../api/api';

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMaps();
  }, []);

  const getMaps = async () => {
    try {
      const maps = await fetchMaps();

      if (!maps) throw new Error('Could not retrieve maps...');

      setMaps(maps.data);
    } catch (error) {
      console.error('error fetching maps', error);
    }
  };

  console.log(maps.data);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-valorant-white">
      <div className="font-Playfair text-6xl">displaying data from fetch maps object</div>
      <div>
        {maps.data?.map((map) => {
          return <div key={map.uuid}>{map.displayName}</div>;
        })}
      </div>
    </div>
  );
};

export default Maps;
