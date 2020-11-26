import React, { useState } from "react";
import { Cellar } from "./Cellar";
import { BottleInfo } from "./BottleInfo";
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

const App = (props) => {
  let [user, setUser] = useState(getCookie("username"));
  let [pass, setPass] = useState(getCookie("password"));
  let [bottle, setBottle] = useState(null);
  let [selected, setSelected] = useState(false);

  const doForm = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    setUser(username);
    setPass(password);
    document.cookie = "username=" + username + ";";
    document.cookie = "password=" + password + ";";
  };

  const onHover = (bottle) => {
    if(!selected)
      setBottle(bottle);
  };

  const onNoHover = () => {
    if (!selected) setBottle(null);
  };

  const onClick = (bot) => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
      console.log("selected");
    }
    console.log("selected was " + selected)
  };

  return (
    <div>
      <div id="connection">
        <form>
          <label htmlFor="username">User: </label>
          <input
            id="username"
            name="username"
            defaultValue={user}
            type="text"
            width="16"
          />
          <label htmlFor="password">Password: </label>
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
      <Cellar
        user={user}
        pass={pass}
        onHover={onHover}
        onNoHover={onNoHover}
        onSelect={onClick}
      />
      <BottleInfo bottle={bottle} />
    </div>
  );
};

export default App;
