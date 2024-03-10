import React from 'react';

interface AgentProps {
  agentId: string;
}

const Agent: React.FC<AgentProps> = ({ agentId }) => {
  console.log('inside agent', agentId);

  return (
    <>
      <div>selected agent {agentId}</div>
    </>
  );
};

export default Agent;
