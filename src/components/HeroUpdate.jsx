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
    <div>
      <div>hello world</div>
      <div>
        {agents.map((agent) => {
          return (
            <div key={agent.uuid}>
              {agent.isPlayableCharacter && (
                <div>
                  <h1 className="text-9xl">{agent.displayName}</h1>
                  <p>{agent.description}</p>
                  <p>{agent.role.displayName}</p>
                  <div>
                    {agent.abilities.map((ability, i) => {
                      return (
                        <div key={i}>
                          <div>
                            <img src={ability.displayIcon} alt={ability.displayName} />
                            <p>{ability.displayName}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <img className="" src={agent.bustPortrait} />
                  <img src={agent.background} alt={agent.displayName} />
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
