import React, { useState, useEffect } from 'react';
import { fetchWeapons } from '../api/api';

const WeaponsUpdate = () => {
  const [weapons, setWeapons] = useState([]);

  const getWeapons = async () => {
    try {
      const res = await fetchWeapons();
      setWeapons(res.data);
    } catch (err) {
      console.error('error fetching weapons line 9 weapons js', err);
    }
  };

  useEffect(() => {
    getWeapons();
  }, []);
  return (
    <div className="">
      <div className="border-2 grid grid-cols-1 gap-5">
        {weapons.map((weapon) => {
          return (
            <div className="border-2 " key={weapon.uuid}>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-8xl font-Mohave font-black uppercase tracking-tighter">{weapon.displayName}</h1>
                {weapon.shopData !== null && (
                  <div className="border-2 w-3/4">
                    <p className="text-center text-2xl tracking-tighter font-Mohave uppercase">
                      {weapon.shopData.category}
                    </p>
                    <p className="font-Mohave uppercase">cost: {weapon.shopData.cost}</p>
                    <p className="font-Mohave uppercase">rounds/sec: {weapon.weaponStats.fireRate}</p>
                    <p className="font-Mohave uppercase">reload speed: {weapon.weaponStats.reloadTimeSeconds}</p>
                    <p className="font-Mohave uppercase">magazine size: {weapon.weaponStats.magazineSize}</p>
                  </div>
                )}
              </div>
              <div className="border-2 flex flex-col justify-center items-center">
                <img src={weapon.displayIcon} alt={weapon.displayName} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeaponsUpdate;
