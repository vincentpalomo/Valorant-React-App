import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* mobile */}
      <div className="h-[100px] w-screen flex justify-between items-center px-10 bg-off-black sm:hidden">
        {/* logo */}
        <a href="/">
          <button className=" font-Mohave text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path
                fill="#ff5252"
                d="M5,10.885v11.761c0,0.878,0.289,1.732,0.823,2.43L17.4,40.215C17.778,40.71,18.365,41,18.988,41	h9.951c0.835,0,1.302-0.963,0.785-1.619L6.785,10.266C6.198,9.521,5,9.936,5,10.885z"
              ></path>
              <path
                fill="#ff5252"
                d="M27.245,28.389l13.964-18.07C41.792,9.563,43,9.976,43,10.93v12.465c0,0.395-0.117,0.781-0.336,1.109	l-3.07,4.606C39.223,29.666,38.598,30,37.93,30h-9.893C27.206,30,26.737,29.046,27.245,28.389z"
              ></path>
            </svg>
          </button>
        </a>
        {/* menu */}
        <button className="text-neutral-200" onClick={toggleMenu}>
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.86768 22.5V20H26.3677V22.5H3.86768ZM3.86768 16.25V13.75H26.3677V16.25H3.86768ZM3.86768 10V7.5H26.3677V10H3.86768Z"
              fill="#ECE8E1"
            />
          </svg>
        </button>

        {/* nav menu open */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-off-black overflow-hidden sm:hidden">
            <div className="absolute right-10 top-[34px]">
              <button onClick={toggleMenu}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
                    fill="#ECE8E1"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col h-screen justify-center items-center">
              <div className="font-Playfair text-off-white tracking-tight italic text-[64px]">navigation</div>

              <ul className="flex flex-col justify-between h-80 text-5xl font-Mohave font-bold uppercase tracking-tighter text-valorant-red mt-16 items-center">
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/agents">agents</a>
                </li>
                <li>
                  <a href="/weapons">weapons</a>
                </li>
                <li>
                  <a href="/maps">maps</a>
                </li>
              </ul>

              <div className="flex justify-center mt-10">
                <button className="h-[75px] w-[350px] bg-valorant-red rounded text-valorant-white font-bold uppercase text-[23px]">
                  play now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* desktop */}
      <div className="h-[100px] w-screen bg-off-black hidden sm:block">
        <div className="text-off-white flex justify-between items-center h-full mx-10 2xl:mx-14">
          <ul className="flex justify-between w-1/5 2xl:w-1/6 text-base font-sans font-bold uppercase tracking-wide">
            <li>
              <a href="/agents">agents</a>
            </li>
            <li>
              <a href="/weapons">weapons</a>
            </li>
            <li>
              <a href="/maps">maps</a>
            </li>
          </ul>

          <button className="font-Mohave text-neutral-200">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 48 48">
                <path
                  fill="#ff5252"
                  d="M5,10.885v11.761c0,0.878,0.289,1.732,0.823,2.43L17.4,40.215C17.778,40.71,18.365,41,18.988,41	h9.951c0.835,0,1.302-0.963,0.785-1.619L6.785,10.266C6.198,9.521,5,9.936,5,10.885z"
                ></path>
                <path
                  fill="#ff5252"
                  d="M27.245,28.389l13.964-18.07C41.792,9.563,43,9.976,43,10.93v12.465c0,0.395-0.117,0.781-0.336,1.109	l-3.07,4.606C39.223,29.666,38.598,30,37.93,30h-9.893C27.206,30,26.737,29.046,27.245,28.389z"
                ></path>
              </svg>
            </a>
          </button>

          <div className="w-1/5 2xl:w-1/4 flex justify-end">
            <button className="h-[60px] w-[120px] bg-valorant-red rounded text-valorant-white font-bold uppercase">
              play free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
