import React from 'react';
export default function Pet({name, type, text}){
    return (
    <div>
    <h1>{name}</h1>
    <h3>{type}</h3>
    <p>{text}</p>
    </div>
    );
    

}
