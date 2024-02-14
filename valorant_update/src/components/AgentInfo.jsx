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

  console.log('agent:', agent?.data);

  return (
    <div className="h-screen w-screen bg-valorant-black flex flex-col justify-center items-center gap-5">
      <button onClick={handleGoBack} className="text-valorant-red">
        go back
      </button>
      <div className="text-valorant-white">{agent?.data.displayName}</div>

      <div className="h-[400px] relative w-full overflow-hidden">
        <img
          className="absolute -bottom-10 scale-[2] z-10"
          src={agent?.data.fullPortrait}
          alt={agent?.data.displayName}
        />
        <img className="absolute -bottom-28 scale-[1.5]" src={agent?.data.background} alt={agent?.data.displayName} />
      </div>

      <div className="flex">
        {agent?.data.abilities.map((ability) => {
          return (
            <div className="flex flex-col items-center">
              <img src={ability.displayIcon} alt={ability.displayName} />
              <div>{ability.displayName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentInfo;
