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
    <div className="h-screen bg-valorant-white flex flex-col justify-center items-center">
      <div className="font-Playfair text-6xl">displaying data from fetch weapons object</div>
      <div>
        {weapons.data?.map((weapon) => {
          return <div key={weapon.uuid}>{<div>{weapon.displayName}</div>}</div>;
        })}
      </div>
    </div>
  );
};

export default Weapons;
