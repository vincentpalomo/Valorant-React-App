import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col justify-end items-center h-screen">
      <div className="mb-[150px] flex flex-col items-center">
        <img src={require('../images/mobile-valorant-logo.png')} alt="logo" />
        <p className="font-sans text-neutral-200 uppercase text-xs text-center w-[232px] my-3">
          A 5v5 character-based tactical shooter
        </p>
      </div>
    </div>
  );
};

export default Main;
