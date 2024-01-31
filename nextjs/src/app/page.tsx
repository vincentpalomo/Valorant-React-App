'use client';

import { useEffect, useState } from 'react';
import { fetchAgents } from './api/api';

export default function Home() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = async () => {
    try {
      const agent = await fetchAgents();
      console.log(agent);
      setAgents(agent?.data);
    } catch (error) {
      console.error('error fetching agents', error);
    }
  };

  console.log([agents]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>
        {agents.map((agent) => {
          return <div key={agent.uuid}>{agent.isPlayableCharacter && <div>{agent.displayName}</div>}</div>;
        })}
      </div>
      <div>hello from nextjs</div> */}
    </main>
  );
}
