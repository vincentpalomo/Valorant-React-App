// valorant api
const APIURL = 'https://valorant-api.com/v1';

// fetch agents
export const fetchAgents = async () => {
  const res = await fetch(`${APIURL}/agents`);
  const json = await res.json();
  return json;
};

// fetch cards
export const fetchCards = async () => {
  const res = await fetch(`${APIURL}/playercards`);
  const json = await res.json();
  return json;
};

// fetch weapons
export const fetchWeapons = async () => {
  const res = await fetch(`${APIURL}/weapons`);
  const json = await res.json();
  return json;
};

// fetch maps
export const fetchMaps = async () => {
  const res = await fetch(`${APIURL}/maps`);
  const json = await res.json();
  return json;
};
