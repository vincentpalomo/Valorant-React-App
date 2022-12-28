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
    <div className='hero min-h-screen mb-3 my-3'>
      <div className='grid grid-cols-3 gap-3'>
        {weapons.map((weapon) => {
          return (
            <div className='card w-96 bg-base-100 shadow-xl' key={weapon.uuid}>
              <div className='card-body'>
                <h2 className='card-title'>{weapon.displayName}</h2>
                {weapon.shopData !== null && (
                  <section className='p-3'>
                    <p>{weapon.shopData.category}</p>
                    <p>Cost: {weapon.shopData.cost}</p>
                    <p>Fire Rate: {weapon.weaponStats.fireRate} Rounds/sec</p>
                    <p>Reload Speed: {weapon.weaponStats.reloadTimeSeconds}s</p>
                    <p>Magazine Size: {weapon.weaponStats.magazineSize}</p>
                  </section>
                )}
              </div>
              <figure className='p-3'>
                <img src={weapon.displayIcon} alt={weapon.displayName} />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
