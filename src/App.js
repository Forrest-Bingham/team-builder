import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMemberList from "./Components/TeamMemberList";
import TeamMemberCard from "./Components/TeamMemberCard";

function App() {
  const [teammate, setTeammate] = useState([]);

  const addNewTeammate = newMember => {
    setTeammate([...teammate, newMember]);
  };
  return (
    <div className="App">
      <h1>Let's Play Some Dota!</h1>
      <div className="form">
        <TeamMemberList addNewTeammate={addNewTeammate} />
        {console.log(teammate)}
      </div>

      <TeamMemberCard List={teammate} />
    </div>
  );
}

export default App;
