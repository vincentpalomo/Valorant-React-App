import React, { useEffect, useState } from 'react';
import { fetchAllWeapons } from '../api/api';

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetchWeapons();
  }, []);

  const fetchWeapons = async () => {
    try {
      const weapons = await fetchAllWeapons();

      if (!weapons) throw new Error('Could not retrieve Weapons...');

      setWeapons(weapons.data);
    } catch (error) {
      console.error('error fetching weapons', error);
    }
  };

  console.log(weapons.data);

  return (
    <div className="h-full bg-valorant-white flex flex-col justify-center items-center text-valorant-black overflow-hidden">
      <div className="font-Mohave font-bold uppercase tracking-tighter text-8xl  relative whitespace-pre-wrap mt-36 ml-2">
        choose{' '}
        <span className="font-Playfair italic lowercase text-[64px] text-valorant-red absolute -top-1 -mx-2 sm:top-0 sm:-mx-0">
          your
        </span>
        {'       '}
        weapon
      </div>
      <div className="grid sm:grid-cols-2 gap-5 ml-5">
        {weapons.data?.map((weapon) => {
          return (
            <div className="w-96" key={weapon.uuid}>
              <div className="font-tungsten font-bold tracking-snug text-[64px] uppercase">{weapon.displayName}.</div>
              <img className="scale-75" src={weapon.displayIcon} alt={weapon.displayName} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
