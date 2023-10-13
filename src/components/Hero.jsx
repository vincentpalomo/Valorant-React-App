import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAgents, fetchCards } from '../api/api';

const Hero = () => {
  const [agent, setAgent] = useState([]);
  const [card, setCard] = useState([]);

  const getAgent = async () => {
    const res = await fetchAgents();
    setAgent(res.data);
  };

  const getCards = async () => {
    const res = await fetchCards();
    setCard(res.data[27]);
  };

  useEffect(() => {
    getAgent();
    getCards();
  }, []);
  return (
    <div className='flex sm:flex-row justify-center items-center h-[100%]'>
      <div className='lg:w-1/2 xl:w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='lg:text-[5rem] xl:text-[10rem] text-6xl text-center tracking-tighter font-black text-red-400 font-valorant'>Valorant</h1>
          <p className='p-6 lg:w-full xl:w-3/4 '>
            Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the
            codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on
            June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters,
            borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.
          </p>
          <div className='flex justify-center items-center w-1/2'>
            <Link to={'/agents'} className='btn btn-primary mx-3 text-lg font-Mohave'>
              Agents
            </Link>
            <Link to={'/weapons'} className='btn btn-primary mx-3 text-lg font-Mohave'>
              Weapons
            </Link>
            <Link to={'/maps'} className='btn btn-primary mx-3 text-lg font-Mohave'>
              Maps
            </Link>
          </div>
        </div>
      </div>
      <div className='relative h-[100%] lg:w-[50%] xl:w-full overflow-hidden'>
        {agent ? (
          <div className=''>
            {agent[3] && <img src={agent[3].bustPortrait} className='absolute sm:scale-[2] xl:scale-[2] z-10 sm:-bottom-36 xl:-bottom-36 right-24' />}
            {agent[11] && <img src={agent[11].bustPortrait} className='absolute sm:scale-[2.5] xl:scale-[2.5] sm:-bottom-20 xl:-bottom-20' />}
            {agent[4] && <img src={agent[4].bustPortrait} className='absolute sm:scale-[2] xl:scale-[2] sm:-bottom-16 xl:-bottom-16 left-36' />}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
