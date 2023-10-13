import React, { useEffect, useState } from 'react';
import { fetchWeapons } from '../api/api';

const Weapons = () => {
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
    <div className="mt-10 sm:mt-0">
      <div className="grid grid-cols-1 gap-5 sm:gap-0">
        {weapons.map((weapon) => {
          return (
            <div className=" md:grid md:grid-cols-1 lg:flex lg:flex-row lg:h-[50rem]" key={weapon.uuid}>
              <div className="flex flex-col justify-center items-center lg:w-3/4 lg:bg-base-200">
                <h1 className="text-8xl sm:text-[10rem] md:text-[8rem] lg:text-[10rem] xl:text-[15rem] font-Mohave font-black uppercase tracking-tighter text-slate-100">
                  {weapon.displayName}
                </h1>
                {weapon.shopData !== null && (
                  <div className="w-3/4">
                    <p className="text-center text-2xl lg:text-8xl tracking-tighter font-Mohave uppercase text-slate-50">
                      {weapon.shopData.category}
                    </p>
                    <p className="font-Mohave uppercase text-center lg:text-3xl ">cost: {weapon.shopData.cost}</p>
                    <p className="font-Mohave uppercase text-center lg:text-3xl ">
                      rounds/sec: {weapon.weaponStats.fireRate}
                    </p>
                    <p className="font-Mohave uppercase text-center lg:text-3xl ">
                      reload speed: {weapon.weaponStats.reloadTimeSeconds}
                    </p>
                    <p className="font-Mohave uppercase text-center lg:text-3xl ">
                      magazine size: {weapon.weaponStats.magazineSize}
                    </p>
                    {/* <span className="hidden sm:block sm:border-b-2"></span> */}
                  </div>
                )}
              </div>
              <div className="lg:relative flex flex-col justify-center items-center sm:h-full lg:w-1/3">
                <img
                  className="lg:absolute lg:right-10 lg:z-10 lg:scale-105"
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
