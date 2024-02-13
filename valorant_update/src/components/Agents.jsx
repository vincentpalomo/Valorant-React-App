import React, { useEffect, useState } from 'react';
import { fetchAllAgents } from '../api/api';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAgent();
  }, []);

  const fetchAgent = async () => {
    try {
      const agents = await fetchAllAgents();

      if (!agents) throw new Error('Could not retrieve Agents...');

      setAgents(agents.data);
    } catch (error) {
      console.error('error fetching agents', error);
    }
  };

  // console.log(agents.data);

  const playableAgents = agents.data?.filter((agent) => agent.isPlayableCharacter);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* mobile */}
      <div className="h-screen bg-valorant-white sm:hidden flex flex-col justify-center">
        <div className="font-Mohave font-bold uppercase tracking-tighter text-valorant-red text-8xl ml-5">agents</div>
        <div className="font-Mohave font-bold uppercase tracking-tighter text-valorant-black text-5xl relative ml-5 whitespace-pre-wrap">
          check{' '}
          <span className="font-Playfair italic font-normal lowercase text-valorant-red text-[40px] absolute bottom-3 -mx-1">
            the
          </span>
          {'     '}
          headcount
        </div>

        <p className="font-sans text-valorant-grey leading-tight tracking-wide text-[19.20px] w-[325px] ml-5">
          Find more ways to plant the Spike on your enemies with scrappers, strategists, and hunters of every
          description.
        </p>

        <div className="relative ml-5">
          <button
            onClick={handleOpen}
            className="bg-valorant-white w-[350px] h-[60px] border border-valorant-grey font-sans font-bold uppercase tracking-wide text-left pl-5"
          >
            select an agent
          </button>
          {open ? (
            <ul className="absolute border border-valorant-grey max-h-[300px] overflow-y-auto bg-valorant-white bottom-[60px]">
              {playableAgents?.map((agent) => {
                return (
                  <div
                    className="hover:bg-valorant-red h-[60px] w-[348px] font-Mohave font-bold uppercase tracking-tighter text-5xl flex items-center pl-5"
                    key={agent.uuid}
                  >
                    {agent.isPlayableCharacter && <li>{agent.displayName}</li>}
                  </div>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      {/* desktop */}
      <div className="hidden h-screen bg-valorant-red sm:flex flex-col justify-center items-center overflow-hidden">
        <div className="font-Playfair text-off-white text-6xl">showing data from fetch agent object</div>
        <div className="text-off-white flex">
          {playableAgents?.map((agent) => {
            return (
              <div key={agent.uuid}>
                {agent.isPlayableCharacter && (
                  <div>
                    <div>{agent.displayName}</div>
                    <div>{agent.role.displayName}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Agents;
