// valorant api
const APIURL = 'https://valorant-api.com/v1';

// fetch agents
export const fetchAllAgents = async () => {
  try {
    const res = await fetch(`${APIURL}/agents`);

    if (!res) throw new Error(`Http error, Status: ${res.status}`);

    const json = await res.json();

    if (!json) throw new Error(`Error parsing JSON data fetchAllAgents`);

    return { status: res.status, data: json };
  } catch (error) {
    console.error(`Error retrieving agents`, error);
  }
};

// fetch agent by uuid
export const fetchAgent = async (uuid) => {
  try {
    const res = await fetch(`${APIURL}/agents/${uuid}`);

    if (!res) throw new Error(`Http error, Status: ${res.status}`);

    const json = await res.json();

    if (!json) throw new Error(`Error parsing JSON data fetchAgent`);

    return { status: res.status, data: json };
  } catch (error) {
    console.error(`Error retreiving agent`, error);
  }
};

// fetch weapons
export const fetchAllWeapons = async () => {
  try {
    const res = await fetch(`${APIURL}/weapons`);

    if (!res) throw new Error(`Http error, Status: ${res.status}`);

    const json = await res.json();

    if (!json) throw new Error(`Error parsing JSON data fetchAllWeapons`);

    return { status: res.status, data: json };
  } catch (error) {
    console.error(`Error retreiving weapons`, error);
  }
};

// fetch weapon by uuid
export const fetchWeapon = async (uuid) => {
  try {
    const res = await fetch(`${APIURL}/weapons/${uuid}`);

    if (!res) throw new Error(`Http error, Status: ${res.status}`);

    const json = await res.json();

    if (!json) throw new Error(`Error parsing JSON data fetchWeapon`);

    return { status: res.status, data: json };
  } catch (error) {
    console.error(`Error retrieving weapon`, error);
  }
};

// fetch maps
export const fetchMaps = async () => {
  try {
    const res = await fetch(`${APIURL}/maps`);

    if (!res) throw new Error(`Http error, Status: ${res.status}`);

    const json = await res.json();

    if (!json) throw new Error(`Error parsing JSON data fetchMaps`);

    return { status: res.status, data: json };
  } catch (error) {
    console.error(`Error retrieving maps`, error);
  }
};
