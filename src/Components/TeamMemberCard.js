import React from "react";

const TeamMemberCard = props => {
  console.log(props);

  return (
    <div className="MemberList">
      {props.List.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h3>{member.name}</h3>
            <h4>Lane: {member.lane}</h4>
            <h4>Position: {member.position}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMemberCard;
