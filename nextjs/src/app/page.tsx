'use client';

import { useState, useEffect } from 'react';
import { fetchAgents } from './api/api';

interface AgentObject {
  data: object;
}

export default function Home() {
  const [agents, setAgents] = useState<AgentObject>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = async () => {
    try {
      const agentResponse: any = await fetchAgents();
      if (agentResponse.status === 200) {
        setAgents(agentResponse.data);
        setLoading(false);
      } else {
        setError(`HTTP Error: ${agentResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching agents:', error);
      setError('Error fetching agents');
    }
  };

  console.log('Agents:', agents.data); // Log agents state

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Rendering'); // Log when component renders

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {agents.data.length > 0 ? (
          agents.data.map((agent: any) => {
            console.log('Agent:', agent); // Log each agent
            return <div key={agent.uuid}>{agent.displayName}</div>;
          })
        ) : (
          <div>No agents found.</div>
        )}
      </div>
    </main>
  );
}
