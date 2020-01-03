import React from "react";
import "./CellarBox.css";

// For each of the four bins, the positions of three possible bottles in it.
var binlookup = [
  [
    { x: 50, y: 35 },
    { x: 35, y: 20 },
    { x: 65, y: 20 }
  ],
  [
    { x: 80, y: 65 },
    { x: 65, y: 50 },
    { x: 80, y: 35 }
  ],
  [
    { x: 35, y: 90 },
    { x: 65, y: 90 },
    { x: 50, y: 75 }
  ],
  [
    { x: 20, y: 65 },
    { x: 35, y: 50 },
    { x: 20, y: 35 }
  ]
];

// A cellar box represnts one box in the cellar, with four
// sub-compartments that hold 2-3 bottles each.
//
export const CellarBox = ({ bottles, onHighlight, onNoHighlight }) => {
  // Map bottles to bins.
  let binned = [[], [], [], []];
  bottles.forEach(x => {
    binned[x.quad - 1].push(x);
  });
  // For each bottle, figure out where it belongs
  let allbots = [];
  binned.forEach((bin, binidx) => {
    let bots = bin.map((bot, botidx) => {
      let loc = binlookup[binidx][botidx];
      let trans = `translate(${loc.x},${loc.y})`;
      return (
        <circle
          key={binidx + "-" + botidx}
          r="8"
          transform={trans}
          onMouseEnter={() => {
            onHighlight(bot.bottle);
          }}
          onMouseLeave={() => {
            onNoHighlight();
          }}
        />
      );
    });
    allbots.splice(allbots.length, 0, ...bots);
  });
  return (
    <div className="CellarBoxContainer">
      <div className="CellarBox">
        <svg width="100" height="100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
          {allbots}
        </svg>
      </div>
    </div>
  );
};

export const PlaceholderBox = props => {
  return <div className="Placeholder"></div>;
};
