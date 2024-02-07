import React from 'react';

const Main = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-center h-screen">
        <div className="mb-[150px] flex flex-col items-center">
          <img src={require('../images/mobile-valorant-logo.png')} alt="logo" />
          <p className="font-sans text-neutral-200 uppercase text-xs text-center w-[232px] my-3">
            A 5v5 character-based tactical shooter
          </p>
        </div>
      </div>
      <div className="h-screen bg-neutral-200 flex flex-col justify-center gap-5">
        <div className="text-[40px] leading-3 font-Playfair italic text-valorant-black">we are</div>
        <div className="text-8xl font-Mohave font-bold tracking-tighter uppercase text-valorant-black">valorant</div>

        <div className="text-[23.04px]">defy the limits</div>
        <p className="text-[19.20px]">
          Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your
          side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster
          than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as
          Deathmatch and Spike Rush
        </p>
        <div className="flex justify-center">
          <button className="h-[60px] w-[300px] bg-valorant-red rounded">learn the game</button>
        </div>
      </div>
    </>
  );
};

export default Main;
