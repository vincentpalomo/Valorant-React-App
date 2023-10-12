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
    <div>
      <div>
        {weapons.map((weapon) => {
          return (
            <div key={weapon.uuid}>
              <div>
                <h1>{weapon.displayName}</h1>
                {weapon.shopData !== null && (
                  <div>
                    <p>{weapon.shopData.category}</p>
                    <p>{weapon.shopData.cost}</p>
                    <p>{weapon.weaponStats.fireRate}</p>
                    <p>{weapon.weaponStats.reloadTimeSeconds}</p>
                    <p>{weapon.weaponStats.magazineSize}</p>
                  </div>
                )}
              </div>
              <div>
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
