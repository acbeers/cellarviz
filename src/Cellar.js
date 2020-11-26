// Cellar.js
import React, { useState, useEffect } from "react";
import { CellarBox, PlaceholderBox } from "./CellarBox";
import { csv } from "d3-fetch";
import "./Cellar.css";
import Fuse from "fuse.js";

let bincolumns = [
  [null, null, 34, 35, 36, { label: "Aging wine" }],
  [null, null, 1, 6, 11, { label: "Special" }],
  [null, null, 2, 7, 12, { label: "World" }],
  [null, null, 3, 8, 13, { label: "France" }],
  [null, null, 4, 9, 14, { label: "Italy" }],
  [null, null, 5, 10, 15, { label: "US-CA" }],
  [null, null, null, 24, 29, { label: "US-CA" }],
  [null, null, 20, 25, 30, { label: "US-CA" }],
  [null, 17, 21, 26, 31, { label: "US-Other" }],
  [null, 18, 22, 27, 32, { label: "US-Other" }],
  [16, 19, 23, 28, 33, { label: "White & Sweet" }],
];

console.log("here");
export const Cellar = ({ user, pass, onHover, onNoHover, onSelect }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);
  const [highlight, setHighlight] = useState([]);

  useEffect(() => {
    let url =
      "https://www.cellartracker.com/xlquery.asp?table=Inventory&User=" +
      user +
      "&Password=" +
      pass +
      "&Format=csv";

    console.log("let's go fetch!");
    csv(url, {
      headers: {
        "Accept-Language": "en-us",
        Host: "www.cellartracker.com",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((data) => {
        // Options for the search index.
        const options = {
          id: "iWine",
          shouldSort: true,
          threshold: 0.3,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            "Wine",
            "Varietal",
            "Bin",
            "Type",
            "Color",
            "Category",
            "Producer",
            "BottleNote",
          ],
        };

        setData(data);
        setIndex(new Fuse(data, options));
      })
      .catch((err) => {
        console.log("Some error on fetching");
        console.log(err);
      });
  }, [user, pass]);

  const doSearch = (evt) => {
    const results = index.search(evt.target.value);
    setHighlight(results);
  };

  // FIXME: This syntax seems wrong.  And the hard-coded constant is unfortunate.
  let bindata = Array.from(Array(40)).map(() => []);

  data.forEach((elt) => {
    let binarr = elt.Bin.split("-");
    if (binarr.length === 2) {
      let bot = { box: binarr[0], quad: binarr[1], bottle: elt };
      bindata[binarr[0]].push(bot);
    } else {
      console.error(`Unknown bin: ${elt.Bin}`);
      console.error(elt);
    }
  });

  let columns = bincolumns.map((col, colidx) => {
    let rows = col.map((row, rowidx) => {
      if (row == null) {
        return <PlaceholderBox key={rowidx} />;
      } else if (typeof row === "object") {
        return (
          <div key={rowidx} className="Label">
            {row.label}
          </div>
        );
      }
      return (
        <CellarBox
          key={rowidx}
          bottles={bindata[row]}
          onHover={onHover}
          onNoHover={onNoHover}
          onSelect={onSelect}
          highlight={highlight}
        />
      );
    });
    return (
      <div key={colidx} className="CellarColumn">
        {rows}
      </div>
    );
  });
  return (
    <div>
      <div id="searchbox">
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" width="40" onChange={doSearch} />
      </div>
      <div>{columns}</div>;
    </div>
  );
};
