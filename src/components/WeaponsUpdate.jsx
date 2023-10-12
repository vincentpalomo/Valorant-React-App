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
      <div className="grid grid-cols-1 gap-5 sm:gap-0">
        {weapons.map((weapon) => {
          return (
            <div className=" md:grid md:grid-cols-1 lg:flex lg:flex-row " key={weapon.uuid}>
              <div className="flex flex-col justify-center items-center lg:w-3/4 lg:bg-base-200">
                <h1 className="text-8xl lg:text-9xl font-Mohave font-black uppercase tracking-tighter text-slate-100">
                  {weapon.displayName}
                </h1>
                {weapon.shopData !== null && (
                  <div className="w-3/4">
                    <p className="text-center text-2xl lg:text-5xl tracking-tighter font-Mohave uppercase text-slate-50">
                      {weapon.shopData.category}
                    </p>
                    {/* <span className="hidden sm:block sm:border-b-2"></span> */}
                    <p className="font-Mohave uppercase text-center lg:text-xl ">cost: {weapon.shopData.cost}</p>
                    <p className="font-Mohave uppercase text-center lg:text-xl ">
                      rounds/sec: {weapon.weaponStats.fireRate}
                    </p>
                    <p className="font-Mohave uppercase text-center lg:text-xl ">
                      reload speed: {weapon.weaponStats.reloadTimeSeconds}
                    </p>
                    <p className="font-Mohave uppercase text-center lg:text-xl ">
                      magazine size: {weapon.weaponStats.magazineSize}
                    </p>
                    <span className="hidden sm:block sm:border-b-2"></span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center ">
                <img className="scale-100" src={weapon.displayIcon} alt={weapon.displayName} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeaponsUpdate;
