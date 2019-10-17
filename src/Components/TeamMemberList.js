import React, { useState } from "react";

const TeamMemberList = props => {
  const [member, setMember] = useState({
    name: "",
    lane: "",
    position: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewTeammate(member);
    console.log("This is our Props.name", member.name);
    setMember({ name: "", lane: "", position: "" }); // Clears out input after submit
  };

  return (
    <div className="submitInfo">
      <form onSubmit={submitForm}>
        <label htmlFor="name"></label>
        <input
          name="name"
          id="name"
          placeholder="Name"
          onChange={changeHandler}
          value={member.name}
        />
        <label htmlFor="lane"></label>
        <input
          name="lane"
          id="lane"
          placeholder="Lane"
          onChange={changeHandler}
          value={member.lane}
        />
        <label htmlFor="position"></label>
        <input
          name="position"
          id="position"
          placeholder="Position"
          onChange={changeHandler}
          value={member.position}
        />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamMemberList;
