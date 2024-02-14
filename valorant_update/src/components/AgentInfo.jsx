import React from 'react';

const AgentInfo = ({ agent, onClose }) => {
  const handleGoBack = () => {
    onClose();
  };

  console.log(agent);
  return (
    <div className="h-screen w-screen bg-valorant-black flex flex-col justify-center items-center">
      <div className="text-valorant-white">Selected Agent: {agent}</div>
      <button onClick={handleGoBack} className="text-valorant-red">
        go back
      </button>
    </div>
  );
};

export default AgentInfo;
