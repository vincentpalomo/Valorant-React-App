import React, { useEffect, useState } from 'react';
import { fetchAgent } from '../api/api';

const AgentInfo = ({ agentId, onClose }) => {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    getAgent(agentId);
  }, [agentId]);

  const getAgent = async (agentId) => {
    try {
      const agent = await fetchAgent(agentId);

      if (!agent) throw new Error('Could not retrieve agent...');

      setAgent(agent.data);
    } catch (error) {
      console.error('error fetching agent data', error);
    }
  };

  const handleGoBack = () => {
    onClose();
  };

  return (
    <>
      {/* mobile view */}
      <div className="sm:hidden h-screen w-screen bg-valorant-black flex flex-col justify-center items-start px-5 gap-5">
        <div className="flex flex-col items-start gap-2 mt-20">
          <button onClick={handleGoBack} className="text-valorant-red uppercase font-sans font-bold z-10">
            back
          </button>
          <div className="font-tungsten font-bold uppercase tracking-normal leading-[5.5rem] text-valorant-white text-8xl -ml-2">
            {agent?.data.displayName}
          </div>
        </div>

        {/* agent icon */}
        <div className="h-[250px] -my-2 w-full flex items-center justify-center bg-valorant-red rounded-md overflow-clip">
          <img src={agent?.data.displayIcon} alt={agent?.data.displayName} />
          {/* <img className="absolute -bottom-28 scale-[1.5]" src={agent?.data.background} alt={agent?.data.displayName} /> */}
        </div>

        <div className="font-Playfair italic text-valorant-red text-5xl">{agent?.data.role.displayName}</div>

        <p className="font-sans text-[19.2px] text-valorant-white leading-tight tracking-wide">
          {agent?.data.description}
        </p>

        <div className="flex justify-center items-center gap-3 w-full pt-5">
          {agent?.data.abilities.map((ability) => {
            return (
              <div className="flex flex-col items-center" key={ability.slot}>
                <img className="h-14" src={ability.displayIcon} alt={ability.displayName} />
                {/* <div>{ability.displayName}</div> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden h-screen w-screen bg-valorant-black sm:flex flex-col justify-center items-start px-20 gap-5 relative overflow-hidden">
        <div className="flex flex-col items-start gap-1">
          <button onClick={handleGoBack} className="text-valorant-red uppercase font-sans font-bold z-10">
            back
          </button>
          <div className="font-tungsten font-bold uppercase tracking-normal leading-[6rem] text-valorant-white text-[160px] -ml-2 mt-20">
            {agent?.data.displayName}
          </div>
        </div>

        <div className="font-Playfair italic text-valorant-red text-[64px] leading-[2.7rem]">
          {agent?.data.role.displayName}
        </div>

        <p className="font-sans text-[19.2px] text-valorant-white leading-tight tracking-wider w-[390px] mb-16">
          {agent?.data.description}
        </p>

        <div className="flex justify-center items-center gap-3">
          {agent?.data.abilities.map((ability) => {
            return (
              <div className="flex flex-col items-center" key={ability.slot}>
                <img className="h-28" src={ability.displayIcon} alt={ability.displayName} />
              </div>
            );
          })}
        </div>

        <img
          className="absolute scale-[.60] left-96 -bottom-64 2xl:scale-50 2xl:-bottom-[425px] z-10"
          src={agent?.data.fullPortrait}
          alt={agent?.data.displayName}
        />
        <img
          className="absolute scale-[.80] right-0 top-0 2xl:scale-100 2xl:top-10 2xl:right-56"
          src={agent?.data.background}
          alt={agent?.data.displayName}
        />
      </div>
    </>
  );
};

export default AgentInfo;
