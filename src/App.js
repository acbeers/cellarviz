import React, { useState } from "react";
import { Cellar } from "./Cellar";
import "./App.css";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const App = props => {
  let [user, setUser] = useState(getCookie("username"));
  let [pass, setPass] = useState(getCookie("password"));

  const doForm = () => {
    console.log("FORM TIME");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    setUser(username);
    setPass(password);
    document.cookie = "username=" + username + ";";
    document.cookie = "password=" + password + ";";
  };

  return (
    <div>
      <div id="connection">
        <form>
          User:{" "}
          <input
            id="username"
            name="username"
            defaultValue={user}
            type="text"
            width="16"
          />
          Password:{" "}
          <input
            id="password"
            name="password"
            type="password"
            defaultValue={pass}
            width="24"
          />
          <input onClick={doForm} type="button" value="Reconnect" />
        </form>
        <div id="error"></div>
      </div>
      <Cellar user={user} pass={pass} />
    </div>
  );
};

export default App;
