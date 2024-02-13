import React, { useEffect, useState } from 'react';
import { fetchAllAgents } from '../api/api';

const Agents = () => {
  const [agents, setAgents] = useState([]);

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

  console.log(agents.data);

  return (
    <div className="h-screen bg-valorant-red flex flex-col justify-center items-center">
      <div className="font-Playfair text-off-white text-6xl">showing data from fetch agent object</div>
      <div>
        {agents.data?.map((agent) => {
          return <div key={agent.uuid}>{agent.isPlayableCharacter && <div>{agent.displayName}</div>}</div>;
        })}
      </div>
    </div>
  );
};

export default Agents;
