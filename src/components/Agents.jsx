import React, { useState, useEffect } from 'react';
import { fetchAgents } from '../api/api';

const Agents = () => {
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
      console.error('error fetching agents line 13 Hero jsx', err);
    }
  };
  return (
    <div className="grid sm:grid-row-3 gap-5 justify-center items-center my-3">
      {agents.map((agent) => {
        return (
          <div className="max-w-5xl" key={agent.uuid}>
            {agent.isPlayableCharacter && (
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img className="h-[40rem] sm:h-[50rem] sm:w-[125rem]" src={agent.bustPortrait} alt="Agents" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-sans text-4xl">{agent.displayName}</h2>
                  <p>Bio: {agent.description}</p>
                  <p>Role: {agent.role.displayName}</p>
                  <p>Abilities: </p>
                  <div>
                    {agent.abilities.map((ability, i) => {
                      return (
                        <div key={i}>
                          <span className="flex flex-row justify-center items-center gap-3">
                            <img src={ability.displayIcon} alt={ability.displayName} className="h-20 w-20" />
                            <p>{ability.displayName}</p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Skills</button>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Agents;
