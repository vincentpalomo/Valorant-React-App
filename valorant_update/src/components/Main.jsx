import React from 'react';
import ep08 from '../videos/ep-08.mp4';
import rep08 from '../videos/RECKONING-ep08.mp4';

const Main = () => {
  return (
    <>
      {/*mobile view */}
      {/* main */}
      <div className="flex flex-col justify-end items-center h-screen sm:hidden">
        <div className="h-screen bg-main-omen bg-[length:1390px_782px] bg-[top_75px_right_-290px] sm:bg-cover sm:bg-center w-screen absolute -z-10 opacity-50"></div>
        <div className="mb-[125px] flex flex-col items-center">
          {/* <img src={require('../images/mobile-valorant-logo.png')} alt='logo' /> */}

          <svg width="349" height="50" viewBox="0 0 349 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_50_366)">
              <path
                d="M310.977 9.69698H323.458L323.497 47.8727C323.497 48.3636 323.897 48.7674 324.394 48.7674L331.541 48.7621C332.038 48.7621 332.438 48.3636 332.438 47.8674L332.396 9.69698H348.049C348.509 9.69698 348.771 9.16119 348.477 8.80223L343.119 2.10618C342.672 1.544 341.992 1.21936 341.275 1.21672H310.977C310.479 1.21672 310.08 1.61527 310.08 2.11146V8.80752C310.08 9.29316 310.479 9.69698 310.977 9.69698ZM9.73167 47.8779L46.3458 2.11146C46.6342 1.75251 46.3749 1.21672 45.9145 1.21672H36.7597C36.0426 1.21672 35.36 1.54664 34.9128 2.10618L8.93789 34.5703V2.10618C8.93789 1.60998 8.53836 1.21144 8.04358 1.21144H0.894317C0.39953 1.21144 0 1.60998 0 2.10618V47.8727C0 48.3689 0.39953 48.7674 0.894317 48.7674H7.88747C8.60451 48.7674 9.28187 48.4401 9.73167 47.8779ZM35.5452 47.8779L48.1398 32.1368L60.7343 47.8779C61.1815 48.4401 61.8641 48.7674 62.5838 48.7674H69.5743C70.0717 48.7674 70.4713 48.3689 70.4713 47.8727V2.10618C70.4713 1.61527 70.0717 1.21144 69.5743 1.21144H63.711C62.2742 1.21144 60.9142 1.86336 60.0146 2.98509L24.1096 47.8674C23.8212 48.2263 24.0805 48.7621 24.5408 48.7621H33.6957C34.418 48.7674 35.0954 48.4401 35.5452 47.8779ZM61.5281 14.4399V35.5257L53.0929 24.9841L61.5281 14.4399ZM265.959 47.8674L229.348 2.10091C228.901 1.54136 228.221 1.21408 227.504 1.21144H220.505C220.01 1.21144 219.611 1.60998 219.611 2.10618V47.8727C219.611 48.3689 220.01 48.7674 220.505 48.7674H227.498C228.215 48.7674 228.898 48.4401 229.342 47.8779L241.937 32.1368L254.529 47.8779C254.979 48.4401 255.656 48.7674 256.376 48.7674H265.531C265.991 48.7674 266.248 48.2316 265.959 47.8674ZM236.976 24.9841L228.538 35.531V14.4399L236.976 24.9841ZM136.222 0.0263672C122.421 0.0263672 111.234 11.2014 111.234 24.9894C111.234 38.7774 122.421 49.9551 136.222 49.9551C150.026 49.9551 161.213 38.7774 161.213 24.9894C161.218 11.2014 150.026 0.0263672 136.222 0.0263672ZM136.222 41.4696C127.356 41.4696 120.172 34.0899 120.172 24.9894C120.172 15.8889 127.356 8.50399 136.222 8.50399C145.091 8.50399 152.275 15.8836 152.275 24.9894C152.28 34.0899 145.091 41.4696 136.222 41.4696ZM294.935 2.10618V34.5703L268.96 2.10091C268.51 1.54136 267.833 1.21408 267.113 1.21144H260.112C259.62 1.21144 259.217 1.60998 259.217 2.10618V24.1607C259.217 24.6965 259.397 25.2164 259.736 25.6361L267.174 34.9345C267.502 35.3436 268.161 35.1114 268.161 34.5914V15.398L294.141 47.8779C294.588 48.4401 295.268 48.7674 295.985 48.7674H302.978C303.473 48.7674 303.873 48.3689 303.873 47.8727V2.10618C303.873 1.61527 303.473 1.21144 302.978 1.21144H295.829C295.334 1.21144 294.935 1.61527 294.935 2.10618ZM207.593 12.0249V2.10618C207.593 1.60998 207.194 1.21144 206.699 1.21144H170.111C169.616 1.21144 169.217 1.60998 169.217 2.10618V47.8727C169.217 48.3689 169.616 48.7674 170.111 48.7674H177.26C177.755 48.7674 178.155 48.3689 178.155 47.8727V9.70226H198.655L184.817 27.0059C184.56 27.3279 184.56 27.7924 184.817 28.1223L200.626 47.8832C201.076 48.4454 201.754 48.7727 202.473 48.7727H211.628C212.088 48.7727 212.345 48.2369 212.057 47.8779L195.808 27.5707L207.072 13.5108C207.405 13.0806 207.593 12.5607 207.593 12.0249ZM82.0974 48.7674H103.312C104.029 48.7674 104.712 48.4401 105.157 47.8779L110.515 41.1766C110.803 40.8177 110.546 40.2819 110.086 40.2819H90.141V2.10618C90.141 1.60998 89.7414 1.21144 89.2467 1.21144H82.0974C81.6026 1.21144 81.2031 1.60998 81.2031 2.10618V47.8727C81.2031 48.3636 81.6079 48.7674 82.0974 48.7674Z"
                fill="#ECE8E1"
              />
            </g>
            <defs>
              <clipPath id="clip0_50_366">
                <rect width="348.837" height="50" fill="#ECE8E1" />
              </clipPath>
            </defs>
          </svg>

          <p className="font-sans font-bold text-neutral-200 tracking-wide uppercase text-xs text-center w-[232px] my-3">
            A 5v5 character-based tactical shooter
          </p>
        </div>
      </div>

      {/* about */}
      <div className="h-screen bg-valorant-white flex flex-col justify-center gap-5 sm:hidden">
        <div>
          <div className="text-[40px] font-Playfair italic text-valorant-black mt-10 mx-9">we are</div>
          <div className="text-8xl font-Mohave font-bold tracking-tighter leading-[72px] uppercase text-valorant-black mx-9">
            valorant
          </div>
        </div>
        <div className="text-[23.04px] mx-9 tracking-wide uppercase font-bold">
          defy <span className="font-Playfair lowercase italic font-thin text-xl -mx-1">the</span> limits
        </div>
        <p className="text-[19.20px] text-valorant-grey tracking-wider leading-tight mx-9">
          Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your
          side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster
          than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as
          Deathmatch and Spike Rush
        </p>
        <div className="flex justify-center mt-10">
          <button className="h-[60px] w-[300px] bg-valorant-red rounded text-valorant-white font-bold uppercase">
            learn the game
          </button>
        </div>
      </div>

      {/* agents */}
      <div className="h-screen bg-valorant-red flex flex-col justify-center gap-5 relative overflow-hidden sm:hidden">
        <div className="my-10">
          <div className="text-[40px] font-Playfair italic text-valorant-white  mx-5">your</div>
          <div className="text-8xl font-Mohave font-bold tracking-tighter leading-[72px] uppercase text-valorant-white mx-5">
            agents
          </div>
        </div>

        <div className="text-[23.04px] mx-5 tracking-wide uppercase font-bold text-valorant-white z-10">
          creativity <span className="font-Playfair lowercase italic font-thin text-xl -mx-1">is</span> your greatest
          weapon
        </div>

        <p className="text-[19.20px] text-valorant-white tracking-wider leading-tight mx-5 mb-20 z-10">
          More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that
          create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlights reels will
          look the same.
        </p>

        <div className="flex justify-center mt-10 z-10">
          <button className="h-[60px] w-[300px] bg-valorant-white rounded text-valorant-black font-bold uppercase">
            view all agents
          </button>
        </div>

        <img
          className="absolute bottom-40 left-36 scale-[2] opacity-70"
          src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
          alt="gekko"
        />
      </div>

      {/* maps */}
      <div className="h-screen bg-valorant-white flex flex-col justify-center gap-5 sm:hidden">
        {/* background image */}
        <div className="h-screen w-screen bg-map-section absolute opacity-50 bg-[center_top_-125px] sm:bg-contain sm:bg-center"></div>

        <div className="mb-16 z-0">
          <div className="font-Playfair italic text-[40px] mx-5">your</div>
          <div className="font-Mohave font-bold uppercase tracking-tighter leading-[68px] text-8xl mx-5">maps</div>
        </div>

        <div className="text-[23.04px] mx-6 tracking-wide uppercase font-bold z-0">
          fight around <span className="font-Playfair lowercase italic font-thin text-xl -mx-1">the</span> world
        </div>

        <p className="text-[19.20px] text-valorant-black tracking-wider leading-tight mx-6 mb-36 z-0">
          Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular
          plays, and clutch moments. Make the play others will imitate for years to come..
        </p>

        <div className="flex justify-center z-0">
          <button className="h-[60px] w-[300px] bg-valorant-red rounded text-valorant-white font-bold uppercase">
            view all maps
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="h-screen flex flex-col justify-around gap-5 relative overflow-hidden bg-off-black sm:hidden">
        {/* <img src={require('../images/mobile-valorant-title-red.svg')} alt="logo" /> */}
        {/* valorant title */}
        <div className="flex justify-center mt-28 h-96 z-10">
          <svg width="361" height="52" viewBox="0 0 361 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_85_39)">
              <path
                d="M321.82 10.0848H334.736L334.777 49.7875C334.777 50.298 335.19 50.718 335.705 50.718L343.101 50.7125C343.615 50.7125 344.029 50.298 344.029 49.782L343.985 10.0848H360.184C360.66 10.0848 360.932 9.52756 360.628 9.15424L355.083 2.19035C354.62 1.60568 353.916 1.26806 353.174 1.26531H321.82C321.305 1.26531 320.891 1.6798 320.891 2.19584V9.15974C320.891 9.66481 321.305 10.0848 321.82 10.0848ZM10.071 49.793L47.9617 2.19584C48.2602 1.82253 47.9919 1.26531 47.5154 1.26531H38.0414C37.2993 1.26531 36.5929 1.60842 36.1301 2.19035L9.24953 35.953V2.19035C9.24953 1.6743 8.83607 1.25982 8.32403 1.25982H0.925499C0.413461 1.25982 0 1.6743 0 2.19035V49.7875C0 50.3035 0.413461 50.718 0.925499 50.718H8.16248C8.90452 50.718 9.6055 50.3776 10.071 49.793ZM36.7845 49.793L49.8182 33.4222L62.8519 49.793C63.3147 50.3776 64.0211 50.718 64.7659 50.718H72.0001C72.5149 50.718 72.9284 50.3035 72.9284 49.7875V2.19035C72.9284 1.6798 72.5149 1.25982 72.0001 1.25982H65.9323C64.4455 1.25982 63.0381 1.93782 62.1071 3.10442L24.9502 49.782C24.6517 50.1553 24.9201 50.7125 25.3965 50.7125H34.8706C35.6181 50.718 36.3191 50.3776 36.7845 49.793ZM63.6733 15.0174V36.9467L54.9441 25.9834L63.6733 15.0174ZM275.232 49.782L237.344 2.18487C236.882 1.60294 236.178 1.26257 235.436 1.25982H228.193C227.681 1.25982 227.268 1.6743 227.268 2.19035V49.7875C227.268 50.3035 227.681 50.718 228.193 50.718H235.43C236.172 50.718 236.879 50.3776 237.339 49.793L250.373 33.4222L263.404 49.793C263.869 50.3776 264.57 50.718 265.315 50.718H274.789C275.265 50.718 275.531 50.1608 275.232 49.782ZM245.238 25.9834L236.506 36.9522V15.0174L245.238 25.9834ZM140.972 0.0273438C126.69 0.0273438 115.113 11.6494 115.113 25.9889C115.113 40.3284 126.69 51.9532 140.972 51.9532C155.257 51.9532 166.834 40.3284 166.834 25.9889C166.839 11.6494 155.257 0.0273438 140.972 0.0273438ZM140.972 43.1283C131.796 43.1283 124.362 35.4534 124.362 25.9889C124.362 16.5244 131.796 8.84407 140.972 8.84407C150.15 8.84407 157.584 16.5189 157.584 25.9889C157.59 35.4534 150.15 43.1283 140.972 43.1283ZM305.218 2.19035V35.953L278.337 2.18487C277.872 1.60294 277.171 1.26257 276.426 1.25982H269.181C268.672 1.25982 268.256 1.6743 268.256 2.19035V25.127C268.256 25.6842 268.442 26.225 268.792 26.6614L276.489 36.3318C276.829 36.7573 277.511 36.5157 277.511 35.975V16.0138L304.397 49.793C304.859 50.3776 305.563 50.718 306.305 50.718H313.542C314.054 50.718 314.468 50.3035 314.468 49.7875V2.19035C314.468 1.6798 314.054 1.25982 313.542 1.25982H306.144C305.632 1.25982 305.218 1.6798 305.218 2.19035ZM214.831 12.5058V2.19035C214.831 1.6743 214.418 1.25982 213.906 1.25982H176.042C175.53 1.25982 175.117 1.6743 175.117 2.19035V49.7875C175.117 50.3035 175.53 50.718 176.042 50.718H183.441C183.953 50.718 184.366 50.3035 184.366 49.7875V10.0903H205.582L191.261 28.086C190.995 28.4209 190.995 28.904 191.261 29.2472L207.622 49.7985C208.087 50.3831 208.788 50.7235 209.533 50.7235H219.007C219.483 50.7235 219.749 50.1663 219.45 49.793L202.635 28.6735L214.292 14.0512C214.637 13.6038 214.831 13.063 214.831 12.5058ZM84.9599 50.718H106.914C107.657 50.718 108.363 50.3776 108.823 49.793L114.368 42.8236C114.666 42.4503 114.401 41.8931 113.924 41.8931H93.2839V2.19035C93.2839 1.6743 92.8704 1.25982 92.3584 1.25982H84.9599C84.4478 1.25982 84.0344 1.6743 84.0344 2.19035V49.7875C84.0344 50.298 84.4533 50.718 84.9599 50.718Z"
                fill="#FF4655"
              />
            </g>
            <defs>
              <clipPath id="clip0_85_39">
                <rect width="361" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex justify-center mt-16 z-10">
          <button className="h-[75px] w-[350px] bg-valorant-red rounded text-valorant-white font-bold uppercase">
            download game client
          </button>
        </div>

        {/* riot logo */}
        <div className="flex justify-around items-center text-valorant-red mx-16 -mb-5 z-10">
          <div className="w-[110px]">
            <svg
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              fill="#D13639"
              viewBox="0 0 110 35"
            >
              <path
                d="M17.8 31.7l-1.6-4.1 15.4.8-.7 6.6zM21.5 0L0 10.2l3.3 15.3h4.4l-.7-11 .6-.2 2.7 11.2h4.5l-.1-13.4.6-.2 2.3 13.6h4.9l1.1-16.1.7-.3 1.2 16.4h6.3l2.3-22.4zm84.9 31.2l-6.1-1v-.8l5.9-.2-.1-1.5h-7.5l-.4 3.8 6.2 1.1v.7l-6.5.3-.2 1.4h9.1l-.4-3.8zM48 30.6l-.1 1.4 2.2.1v1.4l-4.7-.1.2-4.1 6.4-.1-.1-1.5h-8.3l-.7 7.3h9.4l-.2-4.5-4.1.1zm39.9 2.7V32l4.4-.1v-1.4l-4.5-.1v-1.3l5.9-.1v-1.5h-8l-.2 7.5h8.4l-.1-1.5-5.9-.2zM81.5 35l-.8-7.4h-2.1l-3.1 3.5-3.1-3.5h-2.1l-.7 7.4h2.5l.2-4.8 3.2 3.3 3.2-3.3.2 4.8zM70.9.5h-5l-.4 22.9h6zm20.4 0H75.7l-.6 22.9h17.3L91.3.5zm-4.8 17.9l-5.5.2-.3-13.5 5.8.2v13.1zM110 5.5l-.6-5H94l.2 4.4 4.9.2.5 18.3h6.1l-1.8-18.1zM56.1 23.4h6.6l-4.3-10.3 3.4-1.9L59.5.5H42.7l-.6 5 3.8-.1-1.8 18.1H50l.2-5.8 4.2-2.3 1.7 8zM50.5 5.1l4.8-.1.6 4.6-5.6 2.6.2-7.1zm13 29.9H66l-2-7.4h-6L56 35h2.5l.4-1.9 4.1.1.5 1.8zm-4.2-3.3l.5-2.4 2.4-.1.5 2.4-3.4.1z"
                fill="#FF4655"
              ></path>
            </svg>
          </div>
          {/* valorant logo */}
          <div className="w-[110px]">
            <svg width="100" height="68.37" viewBox="0 0 1035 697" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="f000000ff"></g>
              <g id="ff4655ff">
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 245.44 4.65 C 248.61 2.76 250.63 6.58 252.34 8.59 C 362.37 146.24 472.53 283.79 582.55 421.44 C 584.81 423.40 583.10 427.59 580.05 427.14 C 527.37 427.20 474.68 427.16 422.00 427.16 C 417.78 427.21 413.74 425.11 411.15 421.82 C 356.49 353.53 301.86 285.21 247.20 216.91 C 244.88 214.15 243.68 210.58 243.83 206.99 C 243.83 141.01 243.85 75.02 243.81 9.04 C 243.84 7.48 243.78 5.46 245.44 4.65 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 754.32 4.33 C 756.57 3.48 759.05 5.56 758.72 7.92 C 758.80 73.93 758.71 139.94 758.76 205.95 C 758.91 209.69 758.09 213.56 755.66 216.50 C 739.05 237.28 722.42 258.05 705.81 278.82 C 703.04 282.42 698.51 284.41 693.98 284.18 C 641.65 284.13 589.31 284.21 536.98 284.14 C 533.89 284.62 532.13 280.45 534.41 278.44 C 606.98 187.65 679.61 96.89 752.22 6.12 C 752.77 5.34 753.47 4.74 754.32 4.33 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 392.51 540.68 C 408.39 538.24 425.06 541.05 439.18 548.77 C 452.87 556.18 464.12 568.01 470.81 582.08 C 478.23 597.51 479.96 615.55 475.77 632.15 C 471.79 648.22 462.16 662.80 449.02 672.87 C 426.55 690.57 393.62 693.18 368.60 679.35 C 354.20 671.62 342.52 658.99 335.93 644.03 C 327.63 625.45 327.52 603.42 335.61 584.74 C 345.36 561.58 367.62 544.27 392.51 540.68 M 396.52 565.68 C 380.58 568.09 366.56 579.41 360.31 594.20 C 353.85 608.92 355.12 626.77 363.73 640.36 C 370.79 651.81 382.83 660.15 396.15 662.29 C 409.69 664.67 424.11 660.48 434.43 651.44 C 446.20 641.37 452.57 625.49 451.24 610.07 C 450.24 596.31 443.18 583.11 432.17 574.76 C 422.19 567.04 408.99 563.63 396.52 565.68 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 0.00 544.09 C 6.18 542.41 12.71 543.77 19.03 543.29 C 21.28 543.60 24.70 542.44 25.97 544.98 C 26.41 548.29 26.13 551.64 26.17 554.98 C 26.17 584.09 26.16 613.21 26.17 642.32 C 51.69 610.43 77.18 578.52 102.67 546.61 C 104.00 544.95 105.81 543.48 108.04 543.44 C 115.36 543.12 122.69 543.48 130.02 543.30 C 132.76 543.35 135.80 542.83 138.14 544.65 C 129.61 555.89 120.57 566.74 111.83 577.82 C 85.63 610.62 59.42 643.41 33.21 676.20 C 31.26 678.58 29.55 681.20 27.22 683.26 C 24.93 685.15 21.74 684.56 19.00 684.71 C 12.67 684.49 6.30 685.05 0.00 684.27 L 0.00 544.09 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 177.20 549.17 C 179.92 545.48 184.38 543.24 188.97 543.34 C 194.63 543.35 200.30 543.24 205.96 543.39 C 207.91 543.18 209.00 545.20 208.75 546.92 C 208.75 591.62 208.75 636.33 208.75 681.03 C 209.01 682.75 207.96 684.85 205.96 684.63 C 198.95 684.71 191.94 684.71 184.93 684.62 C 182.36 684.69 180.33 682.88 178.89 680.95 C 166.77 665.73 154.59 650.56 142.47 635.34 C 130.13 650.71 117.86 666.13 105.55 681.53 C 104.23 683.22 102.32 684.64 100.08 684.61 C 92.05 684.79 84.01 684.57 75.97 684.70 C 74.00 684.57 71.53 685.20 70.31 683.15 C 105.73 638.33 141.63 593.87 177.20 549.17 M 157.23 614.01 C 165.55 624.36 173.75 634.80 182.13 645.09 C 182.19 624.34 182.17 603.60 182.15 582.85 C 173.82 593.22 165.52 603.61 157.23 614.01 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 240.50 546.89 C 240.31 545.31 241.17 543.37 243.00 543.41 C 250.05 543.24 257.13 543.31 264.19 543.38 C 266.21 543.16 267.47 545.16 267.15 547.01 C 267.19 584.47 267.17 621.93 267.16 659.40 C 286.76 659.47 306.36 659.35 325.95 659.45 C 327.63 659.09 328.68 661.22 327.35 662.35 C 322.25 668.92 316.98 675.37 311.79 681.89 C 310.22 684.01 307.56 684.87 305.00 684.68 C 284.34 684.61 263.67 684.76 243.01 684.61 C 241.11 684.69 240.32 682.63 240.50 681.04 C 240.50 636.33 240.49 591.61 240.50 546.89 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 501.67 546.94 C 501.21 544.88 502.87 543.01 504.96 543.35 C 540.68 543.31 576.39 543.33 612.10 543.34 C 613.75 543.11 615.70 544.14 615.54 546.02 C 615.65 555.70 615.56 565.39 615.58 575.07 C 615.79 577.38 614.57 579.41 613.15 581.11 C 602.84 593.86 592.70 606.74 582.36 619.47 C 581.85 620.37 580.15 621.56 581.44 622.60 C 597.06 642.24 612.81 661.79 628.41 681.44 C 629.54 682.38 629.56 684.62 627.71 684.57 C 618.45 684.77 609.18 684.67 599.92 684.62 C 596.29 684.67 594.24 681.30 592.23 678.82 C 577.89 660.83 563.54 642.85 549.15 624.91 C 548.08 623.59 546.44 621.68 547.93 620.05 C 561.48 602.85 575.28 585.83 588.90 568.67 C 568.73 568.58 548.55 568.84 528.39 568.54 C 528.03 606.34 528.41 644.16 528.20 681.96 C 528.43 683.72 526.61 684.89 525.03 684.65 C 518.03 684.65 511.03 684.76 504.03 684.60 C 502.17 684.62 501.42 682.53 501.66 680.98 C 501.67 636.30 501.66 591.62 501.67 546.94 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 651.16 547.01 C 650.84 545.21 652.01 543.15 654.03 543.38 C 660.70 543.26 667.39 543.33 674.07 543.35 C 676.57 543.20 678.99 544.37 680.46 546.40 C 713.79 588.10 747.11 629.81 780.44 671.51 C 783.31 675.36 786.75 678.82 789.24 682.95 C 789.00 683.34 788.52 684.12 788.28 684.51 C 780.20 684.92 772.09 684.51 764.00 684.69 C 760.81 684.74 756.95 685.01 754.84 682.09 C 742.32 666.56 729.92 650.93 717.46 635.35 C 705.12 650.71 692.84 666.13 680.54 681.52 C 679.22 683.23 677.29 684.63 675.05 684.62 C 668.07 684.72 661.09 684.69 654.12 684.64 C 652.04 684.93 650.83 682.83 651.16 681.00 C 651.16 636.34 651.17 591.67 651.16 547.01 M 677.77 582.92 C 677.74 603.66 677.74 624.39 677.77 645.13 C 686.09 634.77 694.37 624.38 702.66 614.00 C 694.35 603.65 686.13 593.22 677.77 582.92 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 768.68 547.05 C 768.47 545.50 769.16 543.48 770.99 543.44 C 777.64 543.17 784.30 543.40 790.95 543.33 C 793.53 543.16 796.23 544.01 797.80 546.17 C 823.45 578.19 849.00 610.29 874.67 642.29 C 874.67 610.52 874.66 578.75 874.67 546.97 C 874.24 544.97 875.80 543.03 877.89 543.35 C 884.93 543.36 891.97 543.19 899.00 543.44 C 900.80 543.51 901.45 545.51 901.25 547.05 C 901.25 591.69 901.25 636.33 901.25 680.97 C 901.46 682.49 900.79 684.55 898.97 684.58 C 891.98 684.78 884.97 684.64 877.98 684.65 C 875.67 684.74 873.48 683.63 872.12 681.80 C 846.50 649.81 820.97 617.74 795.33 585.77 C 795.30 604.52 795.38 623.28 795.30 642.03 C 795.79 643.70 793.41 645.13 792.40 643.61 C 785.04 634.68 777.93 625.54 770.67 616.53 C 769.05 614.76 768.53 612.38 768.65 610.05 C 768.69 589.05 768.64 568.05 768.68 547.05 Z"
                />
                <path
                  fill="#ff4655"
                  opacity="1.00"
                  d=" M 919.64 546.01 C 919.43 544.19 921.37 543.14 922.96 543.35 C 952.32 543.30 981.68 543.35 1011.04 543.33 C 1013.58 543.17 1016.24 544.00 1017.79 546.14 C 1022.99 552.62 1028.24 559.08 1033.35 565.64 C 1034.70 566.74 1033.69 568.92 1031.99 568.62 C 1016.64 568.74 1001.28 568.62 985.92 568.67 C 985.85 606.11 986.01 643.55 986.00 680.99 C 986.36 682.78 985.13 684.84 983.13 684.63 C 976.12 684.69 969.10 684.72 962.10 684.62 C 960.61 684.75 959.31 683.43 959.46 681.96 C 959.21 644.20 959.45 606.43 959.25 568.67 C 947.14 568.64 935.02 568.71 922.92 568.65 C 921.31 568.84 919.39 567.73 919.64 565.91 C 919.54 559.28 919.53 552.64 919.64 546.01 Z"
                />
              </g>
            </svg>
          </div>
        </div>

        <p className="text-[10px] text-center text-off-white px-6 leading-tight mb-5 z-10">
          © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks,
          and/or registered trademarks of Riot Games, Inc.
        </p>

        <img
          className="absolute -bottom-8 scale-[3.8] opacity-75"
          src="https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png"
          alt="viper"
        />
      </div>

      {/* desktop */}
      {/* main */}
      <div className="hidden flex-col justify-end items-start h-screen sm:flex">
        {/* <div className="h-screen bg-main-omen bg-[length:1390px_782px] bg-[top_75px_right_-290px] sm:bg-cover sm:bg-center w-full absolute -z-10 opacity-75 overflow-hidden"></div> */}
        <div className="h-screen w-full overflow-hidden absolute pointer-events-none">
          <video
            className="absolute bottom-0 scale-[2.2] -z-10 opacity-75"
            src={rep08}
            onPlay={(event) => (event.target.currentTime = 5)}
            autoPlay
            loop
            muted
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <p className="font-sans font-bold text-neutral-200 tracking-wide uppercase text-[23.04px] mb-6 ml-12 2xl:ml-14">
            A 5v5 character-based tactical shooter
          </p>

          {/* logo @1440px*/}
          <div className="w-full flex justify-center mb-10 2xl:hidden">
            <svg width="1340" height="192.57" viewBox="0 0 349 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_50_366)">
                <path
                  d="M310.977 9.69698H323.458L323.497 47.8727C323.497 48.3636 323.897 48.7674 324.394 48.7674L331.541 48.7621C332.038 48.7621 332.438 48.3636 332.438 47.8674L332.396 9.69698H348.049C348.509 9.69698 348.771 9.16119 348.477 8.80223L343.119 2.10618C342.672 1.544 341.992 1.21936 341.275 1.21672H310.977C310.479 1.21672 310.08 1.61527 310.08 2.11146V8.80752C310.08 9.29316 310.479 9.69698 310.977 9.69698ZM9.73167 47.8779L46.3458 2.11146C46.6342 1.75251 46.3749 1.21672 45.9145 1.21672H36.7597C36.0426 1.21672 35.36 1.54664 34.9128 2.10618L8.93789 34.5703V2.10618C8.93789 1.60998 8.53836 1.21144 8.04358 1.21144H0.894317C0.39953 1.21144 0 1.60998 0 2.10618V47.8727C0 48.3689 0.39953 48.7674 0.894317 48.7674H7.88747C8.60451 48.7674 9.28187 48.4401 9.73167 47.8779ZM35.5452 47.8779L48.1398 32.1368L60.7343 47.8779C61.1815 48.4401 61.8641 48.7674 62.5838 48.7674H69.5743C70.0717 48.7674 70.4713 48.3689 70.4713 47.8727V2.10618C70.4713 1.61527 70.0717 1.21144 69.5743 1.21144H63.711C62.2742 1.21144 60.9142 1.86336 60.0146 2.98509L24.1096 47.8674C23.8212 48.2263 24.0805 48.7621 24.5408 48.7621H33.6957C34.418 48.7674 35.0954 48.4401 35.5452 47.8779ZM61.5281 14.4399V35.5257L53.0929 24.9841L61.5281 14.4399ZM265.959 47.8674L229.348 2.10091C228.901 1.54136 228.221 1.21408 227.504 1.21144H220.505C220.01 1.21144 219.611 1.60998 219.611 2.10618V47.8727C219.611 48.3689 220.01 48.7674 220.505 48.7674H227.498C228.215 48.7674 228.898 48.4401 229.342 47.8779L241.937 32.1368L254.529 47.8779C254.979 48.4401 255.656 48.7674 256.376 48.7674H265.531C265.991 48.7674 266.248 48.2316 265.959 47.8674ZM236.976 24.9841L228.538 35.531V14.4399L236.976 24.9841ZM136.222 0.0263672C122.421 0.0263672 111.234 11.2014 111.234 24.9894C111.234 38.7774 122.421 49.9551 136.222 49.9551C150.026 49.9551 161.213 38.7774 161.213 24.9894C161.218 11.2014 150.026 0.0263672 136.222 0.0263672ZM136.222 41.4696C127.356 41.4696 120.172 34.0899 120.172 24.9894C120.172 15.8889 127.356 8.50399 136.222 8.50399C145.091 8.50399 152.275 15.8836 152.275 24.9894C152.28 34.0899 145.091 41.4696 136.222 41.4696ZM294.935 2.10618V34.5703L268.96 2.10091C268.51 1.54136 267.833 1.21408 267.113 1.21144H260.112C259.62 1.21144 259.217 1.60998 259.217 2.10618V24.1607C259.217 24.6965 259.397 25.2164 259.736 25.6361L267.174 34.9345C267.502 35.3436 268.161 35.1114 268.161 34.5914V15.398L294.141 47.8779C294.588 48.4401 295.268 48.7674 295.985 48.7674H302.978C303.473 48.7674 303.873 48.3689 303.873 47.8727V2.10618C303.873 1.61527 303.473 1.21144 302.978 1.21144H295.829C295.334 1.21144 294.935 1.61527 294.935 2.10618ZM207.593 12.0249V2.10618C207.593 1.60998 207.194 1.21144 206.699 1.21144H170.111C169.616 1.21144 169.217 1.60998 169.217 2.10618V47.8727C169.217 48.3689 169.616 48.7674 170.111 48.7674H177.26C177.755 48.7674 178.155 48.3689 178.155 47.8727V9.70226H198.655L184.817 27.0059C184.56 27.3279 184.56 27.7924 184.817 28.1223L200.626 47.8832C201.076 48.4454 201.754 48.7727 202.473 48.7727H211.628C212.088 48.7727 212.345 48.2369 212.057 47.8779L195.808 27.5707L207.072 13.5108C207.405 13.0806 207.593 12.5607 207.593 12.0249ZM82.0974 48.7674H103.312C104.029 48.7674 104.712 48.4401 105.157 47.8779L110.515 41.1766C110.803 40.8177 110.546 40.2819 110.086 40.2819H90.141V2.10618C90.141 1.60998 89.7414 1.21144 89.2467 1.21144H82.0974C81.6026 1.21144 81.2031 1.60998 81.2031 2.10618V47.8727C81.2031 48.3636 81.6079 48.7674 82.0974 48.7674Z"
                  fill="#ECE8E1"
                />
              </g>
              <defs>
                <clipPath id="clip0_50_366">
                  <rect width="348.837" height="50" fill="#ECE8E1" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* logo @1540+ */}
          <div className="w-full 2xl:flex justify-center mb-10 hidden">
            <svg width="1800" height="258.68" viewBox="0 0 349 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_50_366)">
                <path
                  d="M310.977 9.69698H323.458L323.497 47.8727C323.497 48.3636 323.897 48.7674 324.394 48.7674L331.541 48.7621C332.038 48.7621 332.438 48.3636 332.438 47.8674L332.396 9.69698H348.049C348.509 9.69698 348.771 9.16119 348.477 8.80223L343.119 2.10618C342.672 1.544 341.992 1.21936 341.275 1.21672H310.977C310.479 1.21672 310.08 1.61527 310.08 2.11146V8.80752C310.08 9.29316 310.479 9.69698 310.977 9.69698ZM9.73167 47.8779L46.3458 2.11146C46.6342 1.75251 46.3749 1.21672 45.9145 1.21672H36.7597C36.0426 1.21672 35.36 1.54664 34.9128 2.10618L8.93789 34.5703V2.10618C8.93789 1.60998 8.53836 1.21144 8.04358 1.21144H0.894317C0.39953 1.21144 0 1.60998 0 2.10618V47.8727C0 48.3689 0.39953 48.7674 0.894317 48.7674H7.88747C8.60451 48.7674 9.28187 48.4401 9.73167 47.8779ZM35.5452 47.8779L48.1398 32.1368L60.7343 47.8779C61.1815 48.4401 61.8641 48.7674 62.5838 48.7674H69.5743C70.0717 48.7674 70.4713 48.3689 70.4713 47.8727V2.10618C70.4713 1.61527 70.0717 1.21144 69.5743 1.21144H63.711C62.2742 1.21144 60.9142 1.86336 60.0146 2.98509L24.1096 47.8674C23.8212 48.2263 24.0805 48.7621 24.5408 48.7621H33.6957C34.418 48.7674 35.0954 48.4401 35.5452 47.8779ZM61.5281 14.4399V35.5257L53.0929 24.9841L61.5281 14.4399ZM265.959 47.8674L229.348 2.10091C228.901 1.54136 228.221 1.21408 227.504 1.21144H220.505C220.01 1.21144 219.611 1.60998 219.611 2.10618V47.8727C219.611 48.3689 220.01 48.7674 220.505 48.7674H227.498C228.215 48.7674 228.898 48.4401 229.342 47.8779L241.937 32.1368L254.529 47.8779C254.979 48.4401 255.656 48.7674 256.376 48.7674H265.531C265.991 48.7674 266.248 48.2316 265.959 47.8674ZM236.976 24.9841L228.538 35.531V14.4399L236.976 24.9841ZM136.222 0.0263672C122.421 0.0263672 111.234 11.2014 111.234 24.9894C111.234 38.7774 122.421 49.9551 136.222 49.9551C150.026 49.9551 161.213 38.7774 161.213 24.9894C161.218 11.2014 150.026 0.0263672 136.222 0.0263672ZM136.222 41.4696C127.356 41.4696 120.172 34.0899 120.172 24.9894C120.172 15.8889 127.356 8.50399 136.222 8.50399C145.091 8.50399 152.275 15.8836 152.275 24.9894C152.28 34.0899 145.091 41.4696 136.222 41.4696ZM294.935 2.10618V34.5703L268.96 2.10091C268.51 1.54136 267.833 1.21408 267.113 1.21144H260.112C259.62 1.21144 259.217 1.60998 259.217 2.10618V24.1607C259.217 24.6965 259.397 25.2164 259.736 25.6361L267.174 34.9345C267.502 35.3436 268.161 35.1114 268.161 34.5914V15.398L294.141 47.8779C294.588 48.4401 295.268 48.7674 295.985 48.7674H302.978C303.473 48.7674 303.873 48.3689 303.873 47.8727V2.10618C303.873 1.61527 303.473 1.21144 302.978 1.21144H295.829C295.334 1.21144 294.935 1.61527 294.935 2.10618ZM207.593 12.0249V2.10618C207.593 1.60998 207.194 1.21144 206.699 1.21144H170.111C169.616 1.21144 169.217 1.60998 169.217 2.10618V47.8727C169.217 48.3689 169.616 48.7674 170.111 48.7674H177.26C177.755 48.7674 178.155 48.3689 178.155 47.8727V9.70226H198.655L184.817 27.0059C184.56 27.3279 184.56 27.7924 184.817 28.1223L200.626 47.8832C201.076 48.4454 201.754 48.7727 202.473 48.7727H211.628C212.088 48.7727 212.345 48.2369 212.057 47.8779L195.808 27.5707L207.072 13.5108C207.405 13.0806 207.593 12.5607 207.593 12.0249ZM82.0974 48.7674H103.312C104.029 48.7674 104.712 48.4401 105.157 47.8779L110.515 41.1766C110.803 40.8177 110.546 40.2819 110.086 40.2819H90.141V2.10618C90.141 1.60998 89.7414 1.21144 89.2467 1.21144H82.0974C81.6026 1.21144 81.2031 1.60998 81.2031 2.10618V47.8727C81.2031 48.3636 81.6079 48.7674 82.0974 48.7674Z"
                  fill="#ECE8E1"
                />
              </g>
              <defs>
                <clipPath id="clip0_50_366">
                  <rect width="348.837" height="50" fill="#ECE8E1" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="hidden flex-col justify-center items-start h-screen sm:flex bg-valorant-white text-valorant-black">
        <div className="ml-24 2xl:ml-32 mt-10">
          <div className="font-Playfair italic font-bold text-[64px]">we are</div>
          <div className="font-Mohave font-bold text-[300px] uppercase tracking-tighter leading-[16rem]">valorant</div>
        </div>

        <div className="w-full flex ">
          {/* text */}
          <div className="ml-24 2xl:ml-32 flex flex-col gap-5">
            <div className="font-sans font-bold uppercase tracking-wide text-[23.04px]">
              defy <span className="font-Playfair lowercase italic font-normal text-[20px] -mx-1">the</span> limits
            </div>
            <div className="w-[675px] text-[19.20px] font-sans tracking-wider leading-[24px] text-valorant-grey">
              Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend
              your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think
              faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush.
            </div>
            <button className="h-[60px] w-[300px] bg-valorant-red rounded text-valorant-white font-bold uppercase">
              learn the game
            </button>
          </div>

          {/* video */}
          <div className="flex items-center justify-center w-full">
            <div className="opacity-90 w-[534px] h-[356px] 2xl:w-[550px] 2xl:h-[366.67px] overflow-hidden flex items-center justify-center">
              <video className=" scale-125" src={ep08} autoPlay loop muted />
            </div>
          </div>
        </div>
      </div>

      {/* agents */}
      <div className="hidden sm:flex flex-col justify-end items-start h-screen bg-valorant-red text-valorant-white relative">
        {/* top sub title */}
        <div className="font-Mohave font-bold uppercase text-8xl absolute top-36 left-8 tracking-tighter">
          creativity{' '}
          <span className="font-Playfair italic font-normal tracking-tight lowercase text-[64px] relative bottom-3">
            is
          </span>{' '}
          your greatest weapon.
        </div>

        <div className="w-full flex mb-10">
          {/* agent images */}
          <div className="w-1/2 relative">
            <div className="absolute bottom-24 2xl:-bottom-4 right-40">
              <img
                className="scale-150 2xl:scale-105"
                src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
                alt="gekko"
              />
            </div>
            <div className="absolute bottom-24 2xl:-bottom-4 left-40">
              <img
                className="scale-150 2xl:scale-105"
                src="https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/fullportrait.png"
                alt="deadlock"
              />
            </div>
          </div>

          {/* text content */}
          <div className="flex flex-col">
            <div className="">
              <div className="font-Playfair italic text-[64px] tracking-tight ml-14">your</div>
              <div className="font-Mohave font-bold uppercase text-[300px] tracking-tighter leading-[18rem] mr-12">
                agents
              </div>
            </div>

            <p className="font-sans text-[19.20px] w-[425px] tracking-wider leading-6 ml-16 mb-5">
              More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that
              create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels
              will look the same.
            </p>

            <button className="h-[60px] w-[300px] bg-valorant-white rounded text-valorant-black font-bold uppercase mt-5 ml-36">
              view all agents
            </button>
          </div>
        </div>
      </div>

      {/* maps */}
      <div className="hidden sm:flex flex-col justify-center items-center h-screen bg-valorant-white text-valorant-black gap-5">
        <div className="bg-map-section bg-cover h-screen w-full absolute opacity-50 z-0"></div>
        <div className="font-Mohave font-bold uppercase text-8xl tracking-tighter mt-20 z-10">
          fight around{' '}
          <span className="font-Playfair italic font-normal tracking-tight lowercase text-[64px] relative bottom-3">
            the
          </span>{' '}
          world
        </div>

        <div className="flex flex-col items-center z-10">
          <div className="font-Playfair italic text-[64px] tracking-tight">your</div>
          <div className="font-Mohave font-bold uppercase text-[300px] tracking-tighter leading-[17rem]">maps</div>
        </div>

        <p className="font-sans text-[19.20px] w-[450px] tracking-wider leading-6 text-center mb-10 z-10">
          Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular
          plays, and clutch moments. Make the play others will imitate for years to come..
        </p>

        <button className="h-[60px] w-[300px] bg-valorant-red rounded text-valorant-white font-bold uppercase z-10">
          view all maps
        </button>
      </div>
    </>
  );
};

export default Main;
