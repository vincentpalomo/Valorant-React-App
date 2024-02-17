'use client';

import { useState, useEffect } from 'react';
import { fetchAgents } from './api/api';

interface AgentData {
  filter: any;
  map(arg0: (agent: AgentData) => import('react').JSX.Element): import('react').ReactNode;
  uuid: string;
  displayName: string;
  background: string;
  displayIcon: string;
  bustPortrait: string;
  fullPortrait: string;
  isPlayableCharacter: Boolean;
}

interface AgentObject {
  data: AgentData;
  status: number;
}

export default function Home() {
  const [agents, setAgents] = useState<AgentObject | null>(null);

  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = async () => {
    try {
      const agentResponse: any = await fetchAgents();

      if (agentResponse.status === 200) setAgents(agentResponse.data);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 gap-5">
        {agents &&
          agents.data
            .filter((agent: AgentData) => agent.isPlayableCharacter)
            .map((agent: AgentData) => {
              return (
                <div key={agent.uuid}>
                  <h1>{agent.displayName}</h1>
                  <img src={agent.displayIcon} alt={agent.displayName} />
                </div>
              );
            })}
      </div>
    </main>
  );
}
