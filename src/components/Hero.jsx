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
    <div
      className="hero"
      style={{
        background: '#fffff',
      }}
    >
      <div className="flex flex-grow sm:flex-row h-[43rem] sm:h-[50rem] justify-center items-center">
        <div className="lg:w-1/2 xl:w-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className="lg:text-[5rem] xl:text-[10rem] text-6xl text-center tracking-tighter font-black text-red-400 font-valorant">
              Valorant
            </h1>
            <p className="p-6 lg:w-full xl:w-1/2 ">
              Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for
              Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with
              limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game
              started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing
              several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.
            </p>
            <div className="flex justify-center items-center w-1/2">
              <Link to={'/agents'} className="btn btn-primary mx-3 text-lg font-Mohave">
                Agents
              </Link>
              <Link to={'/weapons'} className="btn btn-primary mx-3 text-lg font-Mohave">
                Weapons
              </Link>
              <Link to={'/maps'} className="btn btn-primary mx-3 text-lg font-Mohave">
                Maps
              </Link>
            </div>
          </div>
        </div>
        <div className="relative xl:h-[53.8rem] lg:h-[45rem] lg:w-[40%] xl:w-full overflow-hidden">
          {agent ? (
            <div>
              {agent[3] && (
                <img
                  src={agent[3].bustPortrait}
                  className="absolute lg:scale-[2.5] xl:scale-[2] z-10 -bottom-10 xl:-bottom-96 right-24"
                />
              )}
              {agent[11] && (
                <img
                  src={agent[11].bustPortrait}
                  className="absolute lg:scale-[3] xl:scale-[2.5] bottom-10 xl:-bottom-80"
                />
              )}
              {agent[4] && (
                <img
                  src={agent[4].bustPortrait}
                  className="absolute lg:scale-[2.5] xl:scale-[2] bottom-5 xl:-bottom-80 left-36"
                />
              )}
            </div>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
