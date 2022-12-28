import React, { useEffect, useState } from 'react';
import { fetchWeapons } from '../api/api';

const Weapons = () => {
  // const [weapon, setWeapon] = useState([]);
  const [odin, setOden] = useState([]);
  const [bucky, setBucky] = useState([]);
  const [phantom, setPhantom] = useState([]);
  const [melee, setMelee] = useState([]);

  const getWeapons = async () => {
    try {
      const res = await fetchWeapons();
      console.log();
      setOden(res.data[0].skins[15].chromas[0].fullRender);
      setMelee(res.data[17].skins[37].chromas[1].fullRender);
      setBucky(res.data[6].skins[1].chromas[0].fullRender);
      setPhantom(res.data[4].skins[1].chromas[0].fullRender);
    } catch (err) {
      console.error('error line 12 weapons jsx', err);
    }
  };

  useEffect(() => {
    getWeapons();
  }, []);

  return (
    <div className='hero min-h-screen'>
      <div className='carousel w-full'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img src={odin} className='w-full' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img src={melee} className='w-full' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img src={bucky} className='w-full' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img src={phantom} className='w-full' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
