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
      <div>{agents.data}</div>
    </div>
  );
};

export default HeroUpdate;
