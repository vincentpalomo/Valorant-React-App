import React, { useEffect, useState } from 'react';
import { fetchAgents } from '../api/api';

const HeroUpdate = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchAgent();
  }, []);

  const fetchAgent = async () => {
    try {
      const agent = await fetchAgents();
      console.log(agent);
      setAgents(agent.data);
    } catch (err) {
      console.error('error fetching agents', err);
    }
  };
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-2">
        {agents.map((agent) => {
          return (
            <div key={agent.uuid}>
              {agent.isPlayableCharacter && (
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-8xl font-Mohave font-bold tracking-tight uppercase">{agent.displayName}</h1>
                  <p className="text-2xl font-Mohave font-bold uppercase">{agent.role.displayName}</p>
                  <p className="w-3/4 leading-4">{agent.description}</p>
                  <div className="flex space-x-1">
                    {agent.abilities.map((ability, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col justify-center items-center">
                            <img src={ability.displayIcon} alt={ability.displayName} className="h-10 w-10" />
                            <p>{ability.displayName}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="relative overflow-hidden">
                    <img className="absolute scale-150 left-20 top-20 z-10" src={agent.bustPortrait} />
                    <img className="scale-105 z-0" src={agent.background} alt={agent.displayName} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroUpdate;
