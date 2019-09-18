import React from 'react';


const TeamMember = (props) => {
console.log('PROPS',props)

  return (
    <div className="teamCards">
      {
        props.teamMembers.map(team => (
          <div className="card" key ={team.id}>
        <h2>Name: {team.name}</h2>
        <h2>Role: {team.role}</h2>
        <h3> Email: {team.email}</h3>
        </div>
        ))}
        </div>
  );
};

export default TeamMember;


















// import React from "react";

// const Notes = props => {
//   return (
//     <div>
//       {props.team.map(team => (
//         <div  key={team.id}>
//           <h2>{team.title}</h2>
//           <p>{team.body}</p>
//           <p>{team.role}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Notes;