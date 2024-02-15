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
    <>
      {/* mobile view */}
      <div className="h-full flex flex-col justify-center items-center bg-valorant-white">
        {/* <div className="font-tungsten text-valorant-black uppercase text-8xl mt-24">maps</div> */}
        <div className="mt-24">
          {maps.data?.map((map) => {
            return (
              <div key={map.uuid} className="relative text-valorant-black h-96">
                <div className="font-tungsten uppercase text-6xl right-5 absolute z-10">{map.displayName}</div>
                <div className="font-sans leading-snug tracking-wide w-[90%] absolute bottom-5 right-5 text-left z-10">
                  {map.narrativeDescription}
                </div>
                <img
                  className="absolute scale-50 z-10 bottom-20 right-20"
                  src={map.displayIcon}
                  alt={map.displayName}
                />
                <img className="opacity-75" src={map.splash} alt={map.displayName} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Maps;
