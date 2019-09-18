import React,{useState} from 'react';
import './App.css';
import Form from './components/Form'
import TeamMember from './components/TeamMember'


function App() {
  const [teamMembers, setTeamMembers] =useState([
    {
    id: 1,
    name: "John",
    email:"JohnJohnerson@gmail.com",
    role:"Web Development"
    }
  ])

  const addNewNote = team => {
    const newNote =  {
      id:Date.now(),
      name: team.name,
      email: team.email,
      role: team.role,
    }
    setTeamMembers([...teamMembers,newNote])
    // console.log("TM",setTeamMembers)
  }

  return (
    <div >
      <h1 className="teamTitle">Team Members</h1>
      <TeamMember teamMembers={teamMembers} />
      <Form addNewNote={addNewNote}/>
    </div>
  );
}

export default App;
