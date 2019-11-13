import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';
import MemberCard from './components/MemberCard';

function App() {
  const [membersList, setMembersList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  function handleEdit(index){
    console.log(membersList[index]);
    
    setMemberToEdit(membersList[index]);
    console.log(memberToEdit);
    
  }

  function handleMemberSubmit(member){
    let stateCopy = [...membersList];
    stateCopy.push(member)
    setMembersList(stateCopy);

  }
  
  return (
    <div className="App">
      <Form setter = {handleMemberSubmit} memberToEdit = {memberToEdit}/>
      {membersList.map((member, index)=>{
        return (
        <MemberCard 
          name={member.name} 
          role = {member.role} 
          email = {member.email} 
          key = {index} 
          handleEdit = {handleEdit}
          index = {index}/>
          )
      })}
    </div>
  );
}

export default App;
