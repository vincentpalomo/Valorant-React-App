// valorant api
const APIURL = 'https://valorant-api.com/v1';

// fetch agents
export const fetchAgents = async () => {
  try {
    const res = await fetch(`${APIURL}/agents`);

    if (!res.ok) {
      throw new Error(`Http error, Status: ${res.status}`);
    }

    const json = await res.json();

    if (!json) {
      throw new Error('Error parsing JSON data');
    }

    return { data: json, status: res.status };
  } catch (error) {
    console.error(`Error retrieving agents`, error);
  }
};
