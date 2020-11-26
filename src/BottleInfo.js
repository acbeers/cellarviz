import React from "react";

export const BottleInfo = ({ bottle }) => {
  if (bottle) {
    const url =
      "https://www.cellartracker.com/inmycellar.asp?iWine=" + bottle.iWine;
    return (
      <div id="tooltip">
        <table>
          <tbody>
            <tr>
              <td id="name">{bottle.Vintage + " " + bottle.Wine}</td>
            </tr>
            <tr>
              <td id="varietal">{bottle.Varietal}</td>
            </tr>
            <tr>
              <td id="bin">{bottle.Bin}</td>
            </tr>
            <tr>
              <td id="value">{bottle.Valuation}</td>
            </tr>
            <tr>
              <td id="link">
                <a target="_blank" href={url} rel="noopener noreferrer">
                  link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div id="tooltip"></div>;
  }
};
