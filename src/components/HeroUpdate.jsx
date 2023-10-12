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
    <div className='mt-10 sm:mt-0'>
      <div className='grid grid-cols-1 gap-2 sm:gap-0'>
        {agents.map((agent) => {
          return (
            <div key={agent.uuid}>
              {agent.isPlayableCharacter && (
                <div className='flex flex-col items-center gap-2 sm:flex-row'>
                  <div className='flex flex-col items-center sm:justify-center sm:gap-5 gap-1 sm:h-[50rem] sm:bg-base-200 sm:w-4/5'>
                    <h1 className='text-8xl sm:text-[14rem] sm:tracking-[-.045em] text-slate-100 font-Mohave font-bold tracking-tight uppercase'>
                      {agent.displayName}
                    </h1>
                    <p className='text-2xl sm:text-[5rem] sm:tracking-tighter text-slate-50 font-Mohave font-bold uppercase'>
                      {agent.role.displayName}
                    </p>
                    <span className='hidden sm:block sm:border-b-2 sm:w-4/5'></span>
                    <p className='w-4/5 sm:w-1/3 sm:text-xl sm:leading-5 leading-4'>{agent.description}</p>
                    <div className='flex space-x-1'>
                      {agent.abilities.map((ability, i) => {
                        return (
                          <div key={i}>
                            <div className='flex flex-col justify-center items-center'>
                              <img src={ability.displayIcon} alt={ability.displayName} className='h-10 w-10 sm:h-32 sm:w-32' />
                              <p className='sm:uppercase sm:font-Mohave sm:font-black sm:text-xl'>{ability.displayName}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='relative h-[24rem] sm:h-full overflow-hidden'>
                    <img className='absolute scale-[2.5] sm:scale-[2.5] left-32 top-52 sm:top-72 sm:left-48 z-10' src={agent.bustPortrait} />
                    <img className='scale-105 z-0' src={agent.background} alt={agent.displayName} />
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
