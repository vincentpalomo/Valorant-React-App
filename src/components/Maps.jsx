import React, { useEffect, useState } from 'react';
import { fetchMaps } from '../api/api';

const Maps = () => {
  const [maps, setMaps] = useState([]);

  const getMaps = async () => {
    try {
      const res = await fetchMaps();
      setMaps(res.data);
    } catch (err) {
      console.error('error fetching maps line 9 maps js', err);
    }
  };

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <div className="grid grid-rows-3 gap-5 justify-center items-center my-3">
      {maps.map((map) => {
        return (
          <div className="card max-w-4xl bg-base-100 shadow-xl image-full">
            <figure>
              <img src={map.splash} alt={map.displayName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{map.displayName}</h2>
              <img src={map.displayIcon} alt={map.displayName} className="opacity-25 h-96 w-96" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Maps;
