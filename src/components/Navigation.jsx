import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navbar bg-base-100 space-x-5'>
      <div className='flex-1'>
        <Link to={'/'} className='btn btn-ghost normal-case text-3xl font-valorant text-red-400'>
          Valorant
        </Link>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-hover font-valorant'>
          <label tabIndex={0} className='btn m-1'>
            Game Info
          </label>
          <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link to={'/agents'}>Agents</Link>
            </li>
            <li>
              <Link to={'/weapons'}>Weapons</Link>
            </li>
            <li>
              <Link to={'/maps'}>Maps</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
