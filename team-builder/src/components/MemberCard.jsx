import React from 'react';

function MemberCard(props){
    return (
        <section className = "member-card">
            <h2 className = "name">{props.name}</h2>
            <p className = "role">{props.role}</p>
            <p className = "email">{props.email}</p>
            <button className = "edit-button" onClick={()=>props.handleEdit(props.index)}>Edit</button>
        </section>
    );
}

export default MemberCard;