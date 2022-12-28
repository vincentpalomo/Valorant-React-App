import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAgents, fetchCards } from '../api/api';

const Hero = () => {
  const [agent, setAgent] = useState([]);
  const [card, setCard] = useState([]);

  const getAgent = async () => {
    const res = await fetchAgents();
    setAgent(res.data[11]);
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
    <div
      className='hero'
      style={{
        backgroundImage: `url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta73c882a72c618e3/5ed4150d08ac190a51c6ab88/VALORANT_Logo_V_Lightbox.jpg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='hero-content flex-col lg:flex-row'>
          <img src={card.largeArt} className='max-w-sm rounded-lg shadow-2xl' />
          <div>
            <h1 className='text-5xl font-bold'>Valorant</h1>
            <p className='py-6'>
              Valorant is a free-to-play first-person tactical hero shooter
              developed and published by Riot Games, for Windows. Teased under
              the codename Project A in October 2019, the game began a closed
              beta period with limited access on April 7, 2020, followed by a
              release on June 2, 2020. The development of the game started in
              2014. Valorant takes inspiration from the Counter-Strike series of
              tactical shooters, borrowing several mechanics such as the buy
              menu, spray patterns, and inaccuracy while moving.
            </p>
            <Link to={'/agents'} className='btn btn-primary'>
              View Agents
            </Link>
            <Link to={'/weapons'} className='btn btn-primary'>
              View Weapons
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
