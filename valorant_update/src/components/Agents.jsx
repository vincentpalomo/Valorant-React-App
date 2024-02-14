import React, { useEffect, useState } from 'react';
import { fetchAllAgents } from '../api/api';
import AgentInfo from './AgentInfo';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

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

  const playableAgents = agents.data?.filter((agent) => agent.isPlayableCharacter);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleAgentSelect = (agentId) => {
    console.log(agentId);
    setSelectedAgent(agentId);
    setOpen(false);
  };

  const noAgent = () => {
    setSelectedAgent(null);
  };

  return (
    <>
      {/* mobile */}
      <div className="h-screen bg-valorant-white sm:hidden flex flex-col justify-center gap-4 relative">
        <div className="font-Mohave font-bold uppercase tracking-tighter text-valorant-red text-8xl ml-5 mt-20">
          agents
        </div>

        {/* agent images */}
        <div className="h-[300px] relative mb-1 overflow-x-clip">
          <img
            className="absolute right-24 -bottom-6 scale-[.9] z-0"
            src="https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png"
            alt="omen"
          />
          <img
            className="absolute -bottom-2 scale-[1.1] z-10"
            src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png"
            alt="raze"
          />
          <img
            className="absolute left-24 -bottom-6 scale-[.9]"
            src="https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png"
            alt="killjoy"
          />
        </div>

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

        {/* select agent */}
        <div className="relative ml-5 mt-5">
          <button
            onClick={handleOpen}
            className="bg-valorant-white w-[350px] h-[60px] border border-valorant-grey font-sans font-bold uppercase tracking-wide text-left pl-5"
          >
            {selectedAgent ? selectedAgent : 'Select an agent'}
          </button>
          {open && (
            <ul className="absolute border border-valorant-grey max-h-[300px] overflow-y-auto bg-valorant-white bottom-[60px] z-20">
              {playableAgents?.map((agent) => {
                return (
                  <div
                    className="hover:bg-valorant-red h-[60px] w-[348px] font-Mohave font-bold uppercase tracking-tighter text-5xl flex items-center pl-5"
                    key={agent.uuid}
                    onClick={() => handleAgentSelect(agent.uuid)}
                  >
                    <li>{agent.displayName}</li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className="absolute z-40">{selectedAgent && <AgentInfo agentId={selectedAgent} onClose={noAgent} />}</div>
      </div>

      {/* desktop */}
      <div className="hidden h-screen bg-valorant-white sm:flex flex-col justify-center items-center relative">
        <div className="absolute top-[250px] font-Mohave font-bold uppercase tracking-tighter text-valorant-red text-[300px] leading-3">
          agents
        </div>

        <div className="font-Mohave font-bold uppercase tracking-tighter text-valorant-black text-8xl relative ml-5 whitespace-pre-wrap mb-[105px]">
          check{' '}
          <span className="font-Playfair italic font-normal lowercase text-valorant-red text-[64px] absolute bottom-8 -mx-1">
            the
          </span>
          {'    '}
          headcount
        </div>

        {/* agent select */}
        <div className="absolute h-[450px] w-[1350px] bg-valorant-black flex justify-around items-center bottom-5">
          <p className="font-sans text-valorant-grey leading-tight tracking-wide text-[19.20px] w-[600px] text-center absolute top-3">
            Find more ways to plant the Spike on your enemies with scrappers, strategists, and hunters of every
            description.
          </p>

          <div className="text-off-white flex justify-around h-[60%] w-full">
            {/* Duelist Agents */}
            <div className="w-[275px] flex flex-col items-center">
              <h2 className="text-valorant-white font-Playfair italic lowercase text-[64px]">Duelists</h2>
              {playableAgents
                ?.filter((agent) => agent.role.displayName === 'Duelist')
                .map((agent) => (
                  <div
                    onClick={() => handleAgentSelect(agent.uuid)}
                    className="text-valorant-red cursor-pointer hover:border-b-2 hover:border-valorant-white"
                    key={agent.uuid}
                  >
                    {agent.displayName}
                  </div>
                ))}
            </div>

            {/* Controller Agents */}
            <div className="w-[275px] flex flex-col items-center">
              <h2 className="text-valorant-white font-Playfair italic lowercase text-[64px]">Controllers</h2>
              {playableAgents
                ?.filter((agent) => agent.role.displayName === 'Controller')
                .map((agent) => (
                  <div
                    onClick={() => handleAgentSelect(agent.uuid)}
                    className="text-valorant-red cursor-pointer hover:border-b-2 hover:border-valorant-white"
                    key={agent.uuid}
                  >
                    {agent.displayName}
                  </div>
                ))}
            </div>

            {/* Initiator Agents */}
            <div className="w-[275px]  flex flex-col items-center">
              <h2 className="text-valorant-white font-Playfair italic lowercase text-[64px]">Initiators</h2>
              {playableAgents
                ?.filter((agent) => agent.role.displayName === 'Initiator')
                .map((agent) => (
                  <div
                    onClick={() => handleAgentSelect(agent.uuid)}
                    className="text-valorant-red cursor-pointer hover:border-b-2 hover:border-valorant-white"
                    key={agent.uuid}
                  >
                    {agent.displayName}
                  </div>
                ))}
            </div>

            {/* Sentinel Agents */}
            <div className="w-[275px] flex flex-col items-center">
              <h2 className="text-valorant-white font-Playfair italic lowercase text-[64px]">Sentinels</h2>
              {playableAgents
                ?.filter((agent) => agent.role.displayName === 'Sentinel')
                .map((agent) => (
                  <div
                    onClick={() => handleAgentSelect(agent.uuid)}
                    className="text-valorant-red cursor-pointer hover:border-b-2 hover:border-valorant-white"
                    key={agent.uuid}
                  >
                    {agent.displayName}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="absolute z-40">{selectedAgent && <AgentInfo agentId={selectedAgent} onClose={noAgent} />}</div>
      </div>
    </>
  );
};

export default Agents;
